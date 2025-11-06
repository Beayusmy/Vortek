import React, { useState } from "react";
import "./Cadastro.css";
import Header from "../../components/header/Header";



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
    <Header/>
    <main className="cadastro-container">
      <div className="cadastro-box">
        {/* <img src={logo} alt="Logo Vortek" className="logo" /> */}
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

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </main>
    </>
  );
};

export default Cadastro;