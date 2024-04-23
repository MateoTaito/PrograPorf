import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css' // Dependencia 2 -> react-bootstrap bootstrap
import {createBrowserRouter, RouterProvider} from 'react-router-dom' // Depencia 1 -> react-router-dom

// Paginas
import Layout from './pages/Layout'
import Inicio from './pages/Inicio'
import Actividades from './pages/Actividades'
import Calendario from './pages/Calendario'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import PagError from './pages/PagError'
import ContactoLogin from './pages/ContactoLogin'
import { FormularioProvider } from './context/FormularioContext'

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Inicio/>
      },
      {
        path: '*',
        element: <PagError/>
      },
      {
        path: '/Actividades',
        element: <Actividades/>
      },
      {
        path: '/Calendario',
        element: <Calendario/>
      },
      {
        path: '/Contacto',
        element: <Contacto/>
      },
      {
        path: '/Login',
        element: <Login/>
      },
      {
        path: '/ContactoLogin',
        element: <ContactoLogin/>
      },
    ]
  }
])

// DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <FormularioProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </FormularioProvider>
)
