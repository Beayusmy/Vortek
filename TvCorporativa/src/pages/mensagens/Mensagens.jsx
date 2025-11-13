import React from "react";
import "./Mensagens.css";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";

export default function MensagemForm() {
  return (
    <>
    <Header/>
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

          <Link to="/Menu" >
          
          <button 
          type="button" 
          className="cancel"
          onClick={() => navigate("/Menu")}
          >
            CANCELAR
          </button>
          </Link>


          <Link>
          <button type="submit" 
          className="confirm">
            CONFIRMAR
          </button>
          </Link>

        </div>
      </form>
    </div>
    </>
  );
}
