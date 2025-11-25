import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/header/Header";
import Logo from "../../assets/img/logo_grupo-removebg-preview 4.png"
import api from "../services/Services";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterLogado, setManterLogado] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!email.trim()) {
      await Swal.fire({ icon: "warning", title: "Aviso", text: "Email é obrigatório." });
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      await Swal.fire({ icon: "warning", title: "Email inválido", text: "Por favor, verifique o email." });
      return;
    }
    if (!senha.trim()) {
      await Swal.fire({ icon: "warning", title: "Aviso", text: "Senha é obrigatória." });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email,
        senha: senha,
      };

      console.log("Tentando fazer login com:", { email: payload.email, senha: "****" });

      // Tentar enviar para endpoint de Login
      let res;
      try {
        res = await api.post("Login", payload);
        console.log("Resposta do login (Login endpoint):", res);
      } catch (loginErr) {
        // Se Login retornar 404, tentar Usuario como fallback
        if (loginErr.response?.status === 404) {
          console.warn("Endpoint 'Login' não encontrado (404), tentando 'Usuario'...");
          try {
            res = await api.post("Usuario", payload);
            console.log("Resposta do login (Usuario endpoint fallback):", res);
          } catch (usuarioErr) {
            throw usuarioErr;
          }
        } else {
          throw loginErr;
        }
      }

      if (res.status >= 200 && res.status < 300) {
        // Salvar token ou dados de usuário se retornado
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
        }
        if (res.data?.usuario) {
          localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
        }
        // Salvar email para referência
        localStorage.setItem("email", email);

        // Se "manter logado" estiver marcado, salvar no localStorage
        if (manterLogado) {
          localStorage.setItem("manterLogado", "true");
        }

        await Swal.fire({
          icon: "success",
          title: "Login realizado!",
          text: "Bem-vindo.",
          timer: 1500,
          showConfirmButton: false,
        });

        // Redirecionar para Menu
        navigate("/Menu");
      } else {
        throw new Error(`Status inesperado: ${res.status}`);
      }
    } catch (err) {
      console.error("Erro no login:", err, err.response);
      const msg = err.response?.data?.message || err.response?.data || err.message || "Email ou senha inválidos";
      await Swal.fire({
        icon: "error",
        title: "Falha no login",
        text: typeof msg === "object" ? JSON.stringify(msg) : String(msg),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    {/* <Header /> */}

    <main className="main_login">
        <div className="login-container">
        <header className="login-header">
            <h1 className="logo-login">
            <img src={Logo} alt="Logo Vortek" className="logo-login" />
            </h1>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <label>Senha:</label>
            <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
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

            <a href="/Cadastro" className="criar-conta">
                Não tem conta? Crie uma
            </a>
            </div>

            <button type="submit" className="btn-entrar" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
            </button>
        </form>
        </div>
    </main>

    </>
  );
}

export default Login;




