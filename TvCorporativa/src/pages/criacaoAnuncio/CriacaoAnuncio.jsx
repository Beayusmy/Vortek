import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import "./CriacaoAnuncio.css";
import Header from "../../components/header/Header";

const CriacaoAnuncio = () => {
  const navigate = useNavigate();
  // const { setUsuario } = useerAuth() || {}; // se useAuth retornar undefined, evita erro
  const { setUsuario } = ""; // se useAuth retornar undefined, evita erro
  const [imagem, setImagem] = useState(null);
  const [transacao, setTransacao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  // Exemplo de função de envio (você pode ajustar depois)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      imagem,
      transacao,
      titulo,
      descricao,
      preco,
      categoria,
    });
  };

  return (
    <>
    <Header/>
    <main className="main_criacaoanuncio">
      <h4>ESCOLHER ARQUIVO</h4>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="img-input"
          placeholder="IMAGEM"
          value={imagem || ""}
          onChange={(e) => setImagem(e.target.value)}
        />

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

        <div className="pre-visualizacao">
          <p>pré-visualização</p>
        </div>

        <div className="botao-up-cn">
          <button
            type="button"
            className="cancel"
            onClick={() => navigate("/")}
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
