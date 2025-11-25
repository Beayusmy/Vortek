import React, { useState } from "react";
import "./CadastrarTV.css";
import Header from "../../components/header/Header";

export default function CadastroTV() {
  const [form, setForm] = useState({
    nomeTV: "",
    localizacao: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", form);
  }

  return (
    
     <>
     <Header />
    <div className="tv-container">
    
      <div className="form-box">
        <h2>Cadastrar TV</h2>

        <form onSubmit={handleSubmit}>
          <label>Nome da TV</label>
          <input
            type="text"
            name="nomeTV"
            value={form.nomeTV}
            onChange={handleChange}
          />

          <label>Localização</label>
          <input
            type="text"
            name="localizacao"
            value={form.localizacao}
            onChange={handleChange}
          />

          <div className="btn-group">
            <button type="submit" className="btn cadastrar">
              Cadastrar
            </button>
            <button type="button" className="btn cancelar">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
     </>

    
  );
}
