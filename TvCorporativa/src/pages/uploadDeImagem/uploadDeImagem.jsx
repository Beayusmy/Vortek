import React, { useState } from "react";
import "./uploadDeimagem.css";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";

export default function UploadDeImagem() {
    const [file, setFile] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            file,
            titulo,
            categoria,
            dataInicio,
            dataFim,
        });
    };

    return (
        <>
            <Header />
            <main className="main_uploaddeimagem">
                <form action="" className="form_upload_imagem">
                    <div className="campos_form_upload">
                        <div>
                            <label htmlFor="titulo">Título:</label>
                            <input
                              id="titulo"
                              type="text"
                              value={titulo}
                              onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="file-upload">Imagem:</label>
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            <label htmlFor="file-upload" className="upload-btn">+</label>
                        </div>
                        <div>
                            <label htmlFor="categoria">Categoria:</label>
                            <input
                              id="categoria"
                              type="text"
                              value={categoria}
                              onChange={(e) => setCategoria(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="campos_form_upload">
                        <div>
                            <label htmlFor="dataInicio">Data início:</label>
                            <input
                              id="dataInicio"
                              type="text"
                              placeholder="dd/mm/yy"
                              value={dataInicio}
                              onChange={(e) => setDataInicio(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="dataFim">Data fim:</label>
                            <input
                              id="dataFim"
                              type="text"
                              placeholder="dd/mm/yy"
                              value={dataFim}
                              onChange={(e) => setDataFim(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="campos_form_upload botoes">
                        <button className="bota_upload_imagem">SALVAR</button>
                        <button
                          type="button"
                          className="bota_upload_imagem"
                          onClick={() => navigate("/Menu")}
                        >
                          CANCELAR
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}