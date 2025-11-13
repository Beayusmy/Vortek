import React from "react";
import "./menu.css";
import logo from "../../assets/img/logo_grupo.png"; // caminho da sua logo
import { Link } from "react-router-dom";


function MenuPrincipal() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <img src={logo} alt="Logo VORTEK" className="menu-logo" />
      </header>

      <div className="menu-content">
        <div className="menu-grid">
          <Link className="link" to="/criacaoAnuncio" >
            <button>
              CRIAR ANUNCIO
            </button>
          </Link>

          <Link className="link" to="/Mensagem" >
            <button>
              ANUNCIOS MENSAGEM
            </button>
          </Link>

          <Link className="link" to="/uploadDeImagem" >
            <button>
              CADASTRAR TV
            </button>
          </Link>

          <Link className="link" to="/configuracao" >
            <button>
              ANUNCIOS CRIADOS
            </button>
          </Link>

          <Link className="link" to="/CursosPassando" >
            <button>
              TVS CADASTRADAS
            </button>
          </Link>

          <Link className="link" to="/Visualizador" >
            <button>
              VISUALIZAR TVS
            </button>
          </Link>
        </div>

        <button className="btn-sair">SAIR DA CONTA</button>
      </div>
    </div>
  );
}

export default MenuPrincipal;