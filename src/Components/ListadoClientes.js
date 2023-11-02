import React, { useEffect, useState } from "react";
import clienteAxios from "axios";
import { Link } from "react-router-dom";
import EditModal from "./ModalCliente";
import ModalDelete from "./ModalDelete";

const ListadoClientes = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [clienteRecord, setClienteRecord] = useState({});
    const [clienteId, setClienteId] = useState();
    
    useEffect(() => {
        clienteAxios
            .get("http://localhost:3001/api/customers")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al hacer la solicitud", error);
            });
    }, [isModalOpen, modalDelete]);
    const eliminaCliente = async () => {
        //ELIMINACION DE REGISTRO        
        try {
          const url = "http://localhost:3001/api";
          const { data } = await clienteAxios.delete(url + "/customers/" + clienteId);

        } catch (error) {
          console.error(error)
        }
    };
    const confirmaEliminacion = () => {
      setModalDelete(true);
    }
    const closeModalDelete = () => {
      setModalDelete(false);
    }
    const editaClientes = () => {      
      setIsModalOpen(true);
    }
    const closeModal = () => {
      setIsModalOpen(false);
    }

    const saveChanges = async (resC) => {
      console.log('resultado a editar ',resC);
      try {
        const url = "http://localhost:3001/api";
        const { data } = await clienteAxios.put(url + "/customers", {
          id: resC.id,
          customer_Id: resC.customer_Id,
          name: resC.name,
          rfc: resC.rfc,
          streets: resC.streets,
          numext: resC.numext,
          cp: resC.cp,
          colonia: resC.colonia,
          ciudad: resC.ciudad,
          estado: resC.estado,
          pais: resC.pais,
          telefono: resC.telefono,
          curp: resC.curp
        });                     
      } catch (error) {
        console.error(error)
      }      
    }
  
    return (
        <div className="ml-5">
          {isModalOpen &&  <EditModal 
              isOpen={isModalOpen}
              onClose={closeModal}
              record={clienteRecord}
              onSave={saveChanges}
            />}
            
            {modalDelete && <ModalDelete 
              isOpen={modalDelete}
              onClose={closeModalDelete}
              record={clienteId}
              onDelete={eliminaCliente}
            />}
            <h2 className="text-2xl font-bold mb-4">Clientes</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="border-b border-gray-200">
                        <tr>
                            <th className="text-left py-2 px-4">ID</th>
                            <th className="text-left py-2 px-4">Nombre</th>
                            <th className="text-left py-2 px-4">RFC</th>
                            <th className="text-left py-2 px-4">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200">
                                <td className="py-2 px-4">{item.customer_id}</td>
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.rfc}</td>
                                <td className="py-2 px-4 flex">
                                    <button                                       
                                        className="bg-green-600 border py-2 px-2  text-white mr-2 text-sm uppercase font-bold"
                                        onClick={(clienteObj) => {
                                          setClienteRecord(item);
                                          editaClientes(item);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-600 border py-2 px-2 text-white ml-2 text-sm uppercase font-bold"
                                        onClick={(idItem) => {
                                            setClienteId(item.id);
                                            confirmaEliminacion();
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListadoClientes;
