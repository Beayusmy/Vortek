import React from "react";
import "./menu.css";
import logo from "../../assets/img/logo_grupo.png"; // caminho da sua logo


function MenuPrincipal() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <img src={logo} alt="Logo VORTEK" className="menu-logo" />
      </header>

      <div className="menu-content">
        <div className="menu-grid">
          <button>CRIAR ANUNCIO</button>
          <button>ANUNCIOS MENSAGEM</button>
          <button>CADASTRAR TV</button>
          <button>ANUNCIOS CRIADOS</button>
          <button>TVS CADASTRADAS</button>
          <button>VISUALIZAR TVS</button>
        </div>

        <button className="btn-sair">SAIR DA CONTA</button>
      </div>
    </div>
  );
}

export default MenuPrincipal;