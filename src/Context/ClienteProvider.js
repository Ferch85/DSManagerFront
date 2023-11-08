import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        const obtenerClientes = async () => {
            try {
                const { data } = await clienteAxios("http://localhost:3001/api/customers");
                setClientes(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerClientes();
    }, []);

    const guardarCliente = async (cliente) => {
        if (cliente.id) {
            try {
                const { data } = await clienteAxios.put(`/customers/${cliente.id}`, cliente);
                //Recorrer el array del state clientes para visualizar el cliente actualizado
                const clientesActualizado = clientes.map((cleinteState) => (cleinteState.id === data.id ? data : cleinteState));
                setClientes(clientesActualizado);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const { data } = await clienteAxios.post("/customers", cliente);
                setClientes(data);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
    };

    const setEdicion = () => {};

    const eliminarCliente = async (id) => {
        //FALTA REALIZAR LA ELIMINACION
        try {
            /*     const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }         */
            const { data } = await clienteAxios.delete(`/customers/${id}`);

            const clientesActualizado = clientes.filter((clienteState) => clienteState.id !== id);

            setClientes(clientesActualizado);
        } catch (error) {
            console.log(error);
        }
    };

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
    );
};
export { ClienteProvider };

export default ClienteContext;
