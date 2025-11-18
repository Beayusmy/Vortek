import React, { useEffect, useState } from "react";
import "./Mensagens.css";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import api from "../services/Services";
import Swal from "sweetalert2";

export default function MensagemForm() {
  const navigate = useNavigate();


  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // buscar categorias para popular o select
    const fetchCategorias = async () => {
      try {
        const res = await api.get("Categoria");
        setCategorias(res.data || []);
      } catch (err) {
        // se falhar, deixamos o select vazio e permitimos entrada manual
        console.warn("Não foi possível carregar categorias:", err.message || err);
      }
    };

    fetchCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = {
      Titulo: titulo,
      Descricao: mensagem,
      CategoriaId: categoriaId ? Number(categoriaId) : undefined,
      DataPublicacao: dataPublicacao ? new Date(dataPublicacao).toISOString() : undefined,
    };

    try {
      console.log("Posting payload to /Conteudo:", payload);
      const res = await api.post("Conteudo", payload);
      console.log("API response (Conteudo):", res);

      await Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Conteúdo criado com sucesso",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/Menu");
    } catch (err) {
      console.error("API error (Conteudo):", err);
      console.error("API error response:", err.response);
      const message = err.response?.data?.message || err.response?.data || err.message || "Erro ao salvar";
      setError(message);
      await Swal.fire({
        icon: "error",
        title: "Erro ao salvar",
        text: typeof message === "object" ? JSON.stringify(message) : String(message),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="mensagem-form">
        <form className="form-box" onSubmit={handleSubmit}>
          <label>TITULO:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label>MENSAGEM:</label>
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />

          <label>CATEGORIA:</label>
          {categorias.length > 0 ? (
            <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
              <option value="">Selecione</option>
              {categorias.map((c) => (
                <option key={c.id ?? c.Id ?? c.IdCategoria} value={c.id ?? c.Id ?? c.IdCategoria}>
                  {c.nome ?? c.Nome ?? c.Titulo ?? c.Descricao}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={categoriaId}
              onChange={(e) => setCategoriaId(e.target.value)}
              placeholder="Id da categoria (ou deixe vazio)"
            />
          )}

          <label>DATA PARA COMEÇAR A EXIBIR:</label>
          <input
            type="date"
            value={dataPublicacao}
            onChange={(e) => setDataPublicacao(e.target.value)}
          />

          <div className="buttons">
            <button type="button" className="cancel" onClick={() => navigate("/Menu")}>CANCELAR</button>

            <button type="submit" className="confirm" disabled={loading}>
              {loading ? "ENVIANDO..." : "CONFIRMAR"}
            </button>
          </div>

          {error && <div className="error">Erro: {String(error)}</div>}
        </form>
      </div>
    </>
  );
}