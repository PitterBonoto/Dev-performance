import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Health from "./Pages/Health";
import Studies from"./Pages/Studies"

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Login/>} />
                <Route path="/Home" element = {<Home/>} />
                <Route path="/Cadastrar" element = {<Register/>} />
                <Route path="/Saude" element = {<Health/>}/>
                <Route path="/Estudos" element = {<Studies/>}/>
            </Routes>
        </Router>
    );
}

export default MyRoutes;