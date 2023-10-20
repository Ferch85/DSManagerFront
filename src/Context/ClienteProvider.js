import React from 'react'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/axios'

const ClienteContext = createContext()

const ClienteProvider = ({children}) => {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCiente] = useState({});

    useEffect(() => {
        const obtenerClientes = async () => {
            try {
                const { data } = await clienteAxios('/customers');
                setClientes(data);
            } catch(error) {
                console.log(error);
            }
        }
        obtenerClientes();
    }, [])

    const guardarCliente = async () => {
        if(cliente.id){
            try {
                const { data } = await clienteAxios.put(`/clientes/${cliente.id}`, cliente)
                const clientesActualizado = clientes.map(cleinteState => cleinteState.id === data.id ? data : cleinteState)
                setClientes(clientesActualizado);

            } catch (error) {
                console.log(error)
            }
        }else {
            try {
                const { data } = await clienteAxios.post('/clientes', cliente);
                //aqui me quede
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
    }

    const setEdicion = () => {

    }

    const eliminarCliente = () => {}



    

  return (
    <ClienteContext.Provider
        value={{
            clientes,
            guardarCliente,
            setEdicion,
            cliente,
            eliminarCliente
        }}
    >
        {children}
    </ClienteContext.Provider>
  )
}
export {
    ClienteProvider
}

export default ClienteProvider