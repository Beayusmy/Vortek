import React, { useState } from "react";
import "./uploadDeImagem.css";
import Header from "../../components/header/Header";

export default function UploadDeImagem() {
    const [file, setFile] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

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
        // Aqui você pode fazer o upload para o backend, etc.
    };

    return (
        <>
            <Header />

            <main className="main_uploaddeimagem">
                <form action="" className="form_upload_imagem">
                    <div className="campos_form_upload">
                        <div>
                            <label htmlFor="">Título</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Imagem</label>
                            <input type="file" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Categoria</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="campos_form_upload">
                        <div>
                            <label htmlFor="">Data início</label>
                            <input type="date" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Data fim</label>
                            <input type="date" name="" id="" />
                        </div>
                    </div>
                    <div className="campos_form_upload">
                        <button className="bota_upload_imagem">Salvar</button>
                        <button className="bota_upload_imagem">Cancelar</button>
                    </div>
                </form>
            </main>

        </>
    );
}
