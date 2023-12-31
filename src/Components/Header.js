import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="py-3 bg-indigo-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de {''}
                <span className="text-white font-black">DataStage</span>
            </h1>
            <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to="/main/cargads" className="text-white text-sm uppercase font-bold">Carga Archivos</Link>
                <Link to="/main/adminds" className="text-white text-sm uppercase font-bold">Visualizacion</Link>
                <Link to="/main/facturas" className="text-white text-sm uppercase font-bold">Facturas</Link>
                <Link to="/main" className="text-white text-sm uppercase font-bold">Clientes</Link>        
                <button
                    type="button"
                    className="text-white text-sm uppercase font-bold"
                >Cerrar Sesion</button>
            </nav>
        </div>
    </header>
  )
}

export default Header