import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo_grupo.png"; // caminho da sua logo
import { FaRegFileAlt, FaEye, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo Vortek" />
      </div>

      <div className="icons-section">
        <Link to={'/cadastro'}>
          <FaRegFileAlt className="icon" />
        </Link>

        <Link to={'/Login'}>
          <FaSignOutAlt className="icon" />
        </Link>

        <Link to={'/Menu'}>
          <FaPlus className="icon" />
        </Link>

        <Link to={'/CriacaoAnuncio'}>
          <FaEye className="icon" />
        </Link>

      </div>
    </header>
  );
};

export default Header;