import React, { useState } from "react";
import "./CriacaoAnuncio.css";
import Header from "../../components/header/Header";

export default function CriacaoAnuncio() {
  const [imagem, setImagem] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleImagem(e) {
    const file = e.target.files[0];
    setImagem(file);

    if (file) setPreviewUrl(URL.createObjectURL(file));
    else setPreviewUrl(null);
  }

  return (
    <>
      <Header />

      <div className="container-criacao">

        {/* LINHA 1 */}
        <div className="linha">
          <div className="campo">
            <label>Título:</label>
            <input type="text" />
          </div>

          <div className="campo imagem-box">
            <label>Imagem</label>

            <label htmlFor="input-img" className="btn-add-img">
              +
            </label>

            <input
              id="input-img"
              type="file"
              accept="image/*"
              onChange={handleImagem}
            />
          </div>

          <div className="campo">
            <label>Categoria</label>
            <input type="text" />
          </div>
        </div>

        {/* LINHA 2 */}
        <div className="linha">
          <div className="campo">
            <label>Data início</label>
            <input type="text" placeholder="dd/mm/yy" />
          </div>

          <div className="campo">
            <label>Data fim</label>
            <input type="text" placeholder="dd/mm/yy" />
          </div>
        </div>

        {/* LINHA 3 */}
        <div className="linha">
          <div className="campo">
            <label>TV Cadastrada:</label>
            <input type="text" />
          </div>
        </div>

        {/* PRÉ-VISUALIZAÇÃO */}
        <div className="preview">
          {previewUrl ? (
            <img src={previewUrl} alt="preview" />
          ) : (
            <p>Pré-Visualização</p>
          )}
        </div>

        {/* BOTÕES */}
        <div className="btns">
          <button className="salvar">SALVAR</button>
          <button className="cancelar">CANCELAR</button>
        </div>
      </div>
    </>
  );
}
