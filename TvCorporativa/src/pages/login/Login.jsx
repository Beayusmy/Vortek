import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/header/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterLogado, setManterLogado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha, manterLogado });
  };

  return (
    <>

    {/* <Header /> */}

    <main className="main_login">
        <div className="login-container">
        <header className="login-header">
            <h1 className="logo">
            <span className="logo-v"></span>VORTEK
            </h1>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha:</label>
            <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <div className="options">
            <label className="checkbox">
                <input
                type="checkbox"
                checked={manterLogado}
                onChange={() => setManterLogado(!manterLogado)}
                />
                Manter logado
            </label>

            <a href="#" className="criar-conta">
                Não tem conta? Crie uma
            </a>
            </div>

            <button type="submit" className="btn-entrar">
            Entrar
            </button>
        </form>
        </div>
    </main>

    </>
  );
}

export default Login;




