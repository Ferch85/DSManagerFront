import React, { useEffect } from 'react'
import { useState } from 'react'
import ListadoClientes from './ListadoClientes'
import Formulario from './Formulario'
import { ClienteProvider } from '../Context/ClienteProvider'

export const AdministrarClientes = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [datosCliente, setDatosCliente] = useState({});    


  return (
    <>
        <ClienteProvider>
            <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>        
            <p className="text-xl mb-10 text-center">
                Añade tus pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
        
            <div className="flex flex-col md:flex-row">        
                <button
                    type="button"
                    className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
                    onClick={() => setMostrarFormulario(!mostrarFormulario)}
                >{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
                <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5 `}>
                    <Formulario />
                </div>
                <div className="md:w-1/2 lg:w-3/5">
                    <ListadoClientes />
                </div>          
            </div>
        </ClienteProvider>
    </>    
  )
}
