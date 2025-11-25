import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Menu from "../pages/Menu/menu";
import Cadastro from "../pages/cadastro/Cadastro";
import CriacaoAnuncio from "../pages/criacaoAnuncio/CriacaoAnuncio";
import CadastrarTV from "../pages/CadastrarTV/CadastrarTV";
import CursosPassando from "../pages/CursosPassando/cursos";
import Visualizador from "../pages/visualizador/Visualizador";

const Rotas = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route element={<Login />} path="/" exact />
            
            <Route element={<Cadastro />} path="/Cadastro" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<CriacaoAnuncio />} path="/criacaoAnuncio"/>
            
            <Route element={<CadastrarTV />} path="/CadastrarTV" />
            <Route element={<CursosPassando />} path="/CursosPassando"/>
            <Route element={<Visualizador />} path="/Visualizador"/>
        </Routes>
        // </BrowserRouter>
    )
}

export default Rotas;