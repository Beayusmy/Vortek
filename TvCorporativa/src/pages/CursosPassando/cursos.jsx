import React from "react";
import Header from "../../components/header/Header";

import logoSenai from "../../assets/img/logo-senai.png"; // caminho da sua logo

export default function Painel() {
  const cards = [
    { nome: "Refeitório" },
    { nome: "Atendimento" },
    { nome: "Recepcao" },
    { nome: "Multimidia" },
    { nome: "Dev" },
    { nome: "Secretaria" },
    { nome: "Coworking" },
    { nome: "Biblioteca" },
  ];

  return (
    <>
    <Header/>
    <div style={styles.container}>
      {/* Cabeçalho */}
      {/* <header style={styles.header}></header> */}

      {/* Conteúdo centralizado */}
      <main style={styles.content}>
        <div style={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={logoSenai} alt="Logo SENAI" style={styles.logo} />
              <p style={styles.text}>{card.nome}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé */}
      <footer style={styles.footer}></footer>
    </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f3f3f3",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    height: "70px",
    background: "linear-gradient(to right, #002d83, #f26a21)",
  },

  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center", // centraliza horizontalmente
    alignItems: "center", // centraliza verticalmente
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "40px",
    justifyItems: "center",
    maxWidth: "900px",
  },

  card: {
    backgroundColor: "#d32f2f",
    color: "white",
    width: "180px",
    height: "180px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },

  logo: {
    width: "70px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },

  footer: {
    height: "50px",
  },
};
