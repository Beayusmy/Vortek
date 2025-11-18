import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   
import api from "../services/Services";
import "./Cadastro.css";
import logo_grupo from "../../assets/img/logo_grupo-removebg-preview 4.png";

const Cadastro = () => {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const navigate = useNavigate(); // ⬅ Hook para redirecionar

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7048/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log("Resposta da API:", data);

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");

        // 🔥 Redirecionar para Login
        navigate("/login");
      } else {
        alert("Erro ao cadastrar: " + data.message);
      }
    } catch (error) {
      alert("Erro no servidor: " + error.message);
    }
  };

  return (
    <>
      <div className="logo-container">
        <img src={logo_grupo} alt="Logo Vortek" className="logo_cad_usuario" />
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

            <button type="submit" className="btn_cadastro">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;