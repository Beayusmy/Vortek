import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CriacaoAnuncio.css";
import Header from "../../components/header/Header";

const CriacaoAnuncio = () => {
  const navigate = useNavigate();
  const { setUsuario } = ""; // temporário

  const [imagem, setImagem] = useState(null);
  const [transacao, setTransacao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

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
            onChange={(e) => setImagem(e.target.files[0])}
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
            <p>pré-visualização</p>
          </div>

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