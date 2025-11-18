import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CriacaoAnuncio.css";
import Header from "../../components/header/Header";
import api from "../services/Services";
import Swal from "sweetalert2";

const CriacaoAnuncio = () => {
  const navigate = useNavigate();
  const { setUsuario } = ""; // temporário

  const [imagem, setImagem] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [transacao, setTransacao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // preparar payload (usaremos JSON com ImagemBase64 quando houver imagem)
      console.log("Preparando envio (CriacaoAnuncio):", { titulo, descricao, preco, categoria, transacao, imagem });

      let res;
      if (imagem) {
        // converte arquivo para base64
        const fileToBase64 = (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });

        const base64 = await fileToBase64(imagem);

        const jsonPayload = {
          Titulo: titulo,
          Descricao: descricao,
          CategoriaId: categoria || undefined,
          Preco: preco || undefined,
          Transacao: transacao || undefined,
          ImagemBase64: base64,
        };

        console.log("Enviando JSON com ImagemBase64 (CriacaoAnuncio):", { Titulo: titulo, Descricao: descricao, CategoriaId: categoria, Preco: preco, Transacao: transacao });
        res = await api.post("Conteudo", jsonPayload);
      } else {
        const jsonPayload = {
          Titulo: titulo,
          Descricao: descricao,
          CategoriaId: categoria || undefined,
          Preco: preco || undefined,
          Transacao: transacao || undefined,
        };

        console.log("Enviando JSON (CriacaoAnuncio):", jsonPayload);
        res = await api.post("Conteudo", jsonPayload);
      }

      console.log("Resposta do upload (Conteudo):", res);

      // só considerar sucesso se status for 2xx
      const status = res?.status ?? res?.data?.status ?? null;
      if (status && status >= 200 && status < 300) {
        const successText = imagem ? "Conteúdo enviado com imagem (base64)." : "Conteúdo enviado com sucesso.";
        const details = res?.data ? JSON.stringify(res.data) : "";
        await Swal.fire({
          icon: "success",
          title: "Enviado",
          text: `${successText} ${details}`,
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/Menu");
      } else {
        throw new Error(`Unexpected response status: ${status}`);
      }
    } catch (err) {
      console.error("Erro ao enviar Conteudo:", err, err.response);
      const message = err.response?.data?.message || err.response?.data || err.message || "Erro ao enviar";
      await Swal.fire({ icon: "error", title: "Erro", text: typeof message === "object" ? JSON.stringify(message) : String(message) });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <>
      <Header />
      <main className="main_criacaoanuncio">
        <h4>ESCOLHER ARQUIVO</h4>

        <form className="form-container" onSubmit={handleSubmit}>

          {/* Input de imagem (somente upload, não editável) */}
          <input
            type="file"
            id="input-arquivo"
            className="img-input"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImagem(file || null);
              if (file) {
                const url = URL.createObjectURL(file);
                setPreviewUrl(url);
              } else {
                setPreviewUrl(null);
              }
            }}
          />
          <label htmlFor="input-arquivo" className="label-arquivo">
            {imagem ? imagem.name : "IMAGEM"}
          </label>

          {/* Campo de transação */}
          <div className="input-botao">
            <input
              type="text"
              className="texto-input"
              placeholder="ESCOLHA A TRANSAÇÃO"
              value={transacao}
              onChange={(e) => setTransacao(e.target.value)}
            />
            <button
              type="button"
              className="botao-mais"
              aria-label="Adicionar"
              onClick={() => alert("Função para adicionar transação")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="#00126A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Pré-visualização */}
          <div className="pre-visualizacao">
            {previewUrl ? (
              <img src={previewUrl} alt="pré-visualização" className="preview-img" />
            ) : (
              <p>pré-visualização</p>
            )}
          </div>

          {/* liberar URL criada quando componente desmontar ou imagem mudar */}
          

          {/* Botões */}
          <div className="botao-up-cn">
            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/Menu")}
            >
              CANCELAR
            </button>
            <button type="submit" className="upload">
              UPLOAD
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CriacaoAnuncio;