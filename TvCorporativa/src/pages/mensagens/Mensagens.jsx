import React from "react";
import "./Mensagens.css";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";

export default function MensagemForm() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="mensagem-form">
        <form className="form-box">
          <label>TITULO:</label>
          <input type="text" />

          <label>MENSAGEM:</label>
          <input type="text" />

          <label>CATEGORIA:</label>
          <input type="text" />

          <label>DATA PARA COMEÇAR A EXIBIR:</label>
          <input type="date" />

          <label>DATA DE PARAR DE EXIBIR:</label>
          <input type="date" />

          <div className="buttons">
            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/Menu")}
            >
              CANCELAR
            </button>

            <button type="submit" className="confirm">
              CONFIRMAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
}