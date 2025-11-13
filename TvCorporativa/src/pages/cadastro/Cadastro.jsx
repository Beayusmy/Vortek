import React, { useState } from "react";
import "./Cadastro.css";
import  logo_grupo from "../../assets/img/logo_grupo-removebg-preview 4.png"; // caminho da sua logo

const Cadastro = () => {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados cadastrados:", form);
  };

  return (
    <>
      
      <div className="logo-container">
        <img src={logo_grupo } alt="Logo Vortek" className="logo_cad_usuario" />
      </div>

      <main className="cadastro-container">
        <div className="cadastro-box">
          <form onSubmit={handleSubmit}>
            <label>Nome Completo:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn_cadastro">Cadastrar</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
