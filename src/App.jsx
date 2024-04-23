import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Calendario from "./components/Paginas/Calendario"
import Contact from "./components/Paginas/Contacto";
import Actividades from './components/Paginas/Actividades';
import Login from "./components/Paginas/Login"
import Inicio from './components/Paginas/Inicio';

import Banner_inicio from './components/banner_inicio';
import Desc_lab from './components/desc_lab';
import Carrusel_inicio from './components/carrusel_inicio';

import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="Inicio" element={<Inicio />}></Route>
            <Route path="Calendario" element={<Calendario />}></Route>
            <Route path="Contacto" element={<Contact />}></Route>
            <Route path="Actividades" element={<Actividades />}></Route>
            <Route path="Login" element={<Login />}></Route>

            <Route path="*" element={<Navigate replace to="/Inicio" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App
