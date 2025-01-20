import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige una opcion </p>

        <nav>
            <ul>
                <li>
                    <a href='/panel/inicio'>Inicio</a>
                </li>
                <li>
                    <a href='/panel/crear-articulos'>Crear articulos</a>
                </li>
                <li>
                    <a href='/panel/gestion-uauarios'>Gestion de usuarios</a>
                </li>
                <li>
                    <a href='/panel/acerca-de'>Acerca de</a>
                </li>
            </ul>
        </nav>
        <div>
            {/*Aqui van los componentes de las subrutas */}
            <Outlet />
        </div>
    </div>
  )
}
