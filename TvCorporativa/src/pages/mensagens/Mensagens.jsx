import React from "react";
import "./mensagens.css";
import logo from "../../assets/img/logo_grupo.png"; // caminho da sua logo
import { FaRegFileAlt, FaEye, FaPlus, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo Vortek" />
        <span>VORTEK</span>
      </div>

      <div className="icons-section">
        <FaRegFileAlt className="icon" />
        <FaEye className="icon" />
        <FaPlus className="icon" />
        <FaSignOutAlt className="icon" />
      </div>
    </header>
  );
};

export default Header;