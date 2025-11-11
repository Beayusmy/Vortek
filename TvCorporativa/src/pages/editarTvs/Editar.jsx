import React from "react";
import "./editar.css";
import Header from "../../components/header/Header";
import LogoSenai from "../../assets/img/logo-senai.png"; // <-- nome ajustado conforme arquivo real
import LogoVortek from "../../assets/img/logo_grupo.png"; // <-- nome ajustado conforme arquivo real
import { Pencil, Trash2, Undo2 } from "lucide-react";



export default function EditarTvs() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="editarTvs-container">
      <Header />

      <main className="editarTvs-main">
        <div className="conteudo-lado-a-lado">
          {/* Imagem principal à esquerda */}
          <div className="card-principal">
            <div className="img-container">
              <img src={LogoSenai} alt="TV Principal" className="img-principal" />
              <div className="icones-sobrepostos">
                <Pencil className="icone" />
                <Trash2 className="icone" />
              </div>
            </div>
          </div>

          {/* Outras imagens à direita */}
          <div className="cards-grid">
            {cards.map((_, index) => (
              <div key={index} className="card-tvs">
                <div className="img-container">
                  <img src={LogoSenai} alt="TV SENAI" className="card-img" />
                  <div className="icones-sobrepostos">
                    <Pencil className="icone" />
                    <Trash2 className="icone" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer-vortek">
        <div className="voltar">
          <Undo2 size={28} />
        </div>
        <img src={LogoVortek} alt="Logo Vortek" className="logo-vortek" />
      </footer>
    </div>
  );
}