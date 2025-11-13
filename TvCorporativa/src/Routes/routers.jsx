import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Menu from "../pages/Menu/menu";
import Cadastro from "../pages/cadastro/Cadastro";
import CriacaoAnuncio from "../pages/criacaoAnuncio/criacaoAnuncio";
import UploadDeImagem from "../pages/uploadDeImagem/uploadDeImagem";
import Configuracao from "../pages/configuracao/configuracoes";
import CursosPassando from "../pages/CursosPassando/cursos";
import Mensagem from "../pages/mensagens/Mensagens";
import Visualizador from "../pages/visualizador/Visualizador";
import EditarTvs from "../pages/EditarTvs/Editar";

const Rotas = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route element={<Login />} path="/Login" exact />
            
            <Route element={<Cadastro />} path="/Cadastro" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<CriacaoAnuncio />} path="/criacaoAnuncio"/>
            <Route element={<Configuracao />} path="/configuracao"/>
            <Route element={<Mensagem />} path="/Mensagem"/>
            <Route element={<UploadDeImagem />} path="/uploadDeImagem" />
            <Route element={<CursosPassando />} path="/CursosPassando"/>
            <Route element={<EditarTvs />} path="/EditarTvs"/>
            <Route element={<Visualizador />} path="/Visualizador"/>
        </Routes>
        // </BrowserRouter>
    )
}

export default Rotas;