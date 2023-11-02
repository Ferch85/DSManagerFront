import React from 'react'
import { useState } from 'react'
import Alerta from './Alerta'

const Formulario = (props) => {
    const [clave, setClave] = useState('');
    const [nombre, setNombre] = useState('');
    const [rfc, setRFC] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [estado, setEstado] = useState('');
    const [id, setId] = useState('');
    const [alerta, setAlerta] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log(clave)
    }

    const { msg } = alerta;
  return (
    <>       
        <form
            className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
            onSubmit={handleSubmit}
        >                
            <div className="mb-5">
                <label htmlFor="clave" className="text-grey-700 uppercase font-bold">Clave del cliente</label>
                <input
                    id="clave"
                    type="text"
                    placeholder="Clave del cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={clave}
                    onChange={e => setClave(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="nombre" className="text-grey-700 uppercase font-bold">Nombre cliente</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre del cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}                        
                />
            </div>
            <div className="mb-5">
                <label htmlFor="rfc" className="text-grey-700 uppercase font-bold">RFC cliente</label>
                <input
                    id="rfc"
                    type="text"
                    placeholder="RFC del Cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={rfc}
                    onChange={e => setRFC(e.target.value)}
                />
            </div>    
            <div className="mb-5">
                <label htmlFor="telefono" className="text-grey-700 uppercase font-bold">Telefono</label>
                <input
                    id="telefono"
                    type="text"      
                    placeholder="Telefono del Cliente"                  
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>   
            <div className="mb-5">
                <label htmlFor="ciudad" className="text-grey-700 uppercase font-bold">Ciudad</label>
                <input
                    id="ciudad"
                    type="text"
                    placeholder="Ciudad"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={ciudad}
                    onChange={e => setCiudad(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="estado" className="text-grey-700 uppercase font-bold">Estado</label>
                <input
                    id="estado"
                    type="text"
                    placeholder="Estado"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                />
            </div>            
            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={ id ? 'Guardar Cambios' : 'Agregar Cliente'}
            
            />

        </form>
        {msg && <Alerta alerta={alerta} /> }
    </>
  )
}

export default Formulario