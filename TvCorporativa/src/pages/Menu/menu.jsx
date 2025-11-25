import React from "react";
import "./menu.css";
import logo from "../../assets/img/logo_grupo.png";
import { Link } from "react-router-dom";

function MenuPrincipal() {
  return (
    <div className="menu-buttons">
      <header className="menu-header">
        <img src={logo} alt="Logo VORTEK" className="menu-logo" />
      </header>

      <div className="menu-content">
        <div className="menu-buttons">

          <Link className="link" to="/criacaoAnuncio">
            <button>CRIAR ANUNCIO</button>
          </Link>

          <Link className="link" to="/CadastrarTV">
          <button>CADASTRAR TV</button>
          </Link>

          <Link className="link" to="/CursosPassando">
            <button>VISUALIZAR TVS</button>
          </Link>

          <Link className="link" to="/Login">
            <button className="btn-sair">SAIR DA CONTA</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default MenuPrincipal;
