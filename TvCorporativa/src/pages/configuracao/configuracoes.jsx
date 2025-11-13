import React from "react";
import "./configuracoes.css";
import { FaSearch } from "react-icons/fa";
import Header from "../../components/header/Header";
// import logo from "./logo.png"; // coloque o logo da VORTEK aqui
// import { FaSearch } from "react-icons/fa";

function CadastrarTv() {
  return (
    <>
    <Header/>
    <div className="tv-container">
      <header className="tv-header">
        <div className="header-left">
          {/* <img src={logo} alt="Logo Vortek" className="logo" /> */}
          {/* <h1>VORTEK</h1> */}
        </div>
        <div className="header-icons">
          <i className="fa-solid fa-key"></i>
          <i className="fa-solid fa-clock"></i>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-right-to-bracket"></i>
        </div>
      </header>

      <div className="tv-content">
        <label className="tv-label">Tempo de imagem</label>
        <input type="text" className="tv-input" />

        <label className="tv-label2">Cadastrar TV</label>
        <input type="text" className="tv-input" />

        <label className="tv-label3">Pesquisar TV</label>
        <div className="search-box">
          <input type="text" className="tv-input search-input" />
          <FaSearch className="search-icon" />
        </div>
        <button className="btn-cadastrar">CADASTRAR</button>

        
       
      </div>
    </div>
    </>
  );
}

export default CadastrarTv;