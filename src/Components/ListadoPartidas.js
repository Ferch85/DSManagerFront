import React, { useState, useEffect } from "react";
import clienteAxios from "axios";
import ModalPartidas from "./ModalPartidas";

export const ListadoPartidas = (props) => {
    const [data, setData] = useState([]);
    const idFactura = props.idFactura;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [partidaRecord, setPartidaRecord] = useState({});

    useEffect(() => {
        console.log(idFactura);
        if (idFactura) {
            clienteAxios
                .get("http://localhost:3001/api/detalles_facturas/" + idFactura)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error al hacer la solicitud", error);
                });
        }
    }, []);
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const editaPartida = () => {      
        setIsModalOpen(true);
      }

    const saveChanges = async (resC) => {
        console.log("resultado a editar ", resC);
       /* try {
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
            console.error(error);
        }*/
    };
    return (
        <>
            <div className="bg-white py-5 px-5 mb-10 lg:mb-5 shadow-md rounded-md">
                {isModalOpen && <ModalPartidas isOpen={isModalOpen} onClose={closeModal} record={partidaRecord} onSave={saveChanges} />}
                <div className="flex items-stretch">
                    <h2 className="uppercase py-5 pr-5 font-bold text-indigo-600">Partidas</h2>
                    <button className="bg-green-600 m-2 p-2 text-white uppercase font-bold hover:bg-green-700 h-10 cursor-pointer transition-colors" onClick={editaPartida}>
                        Agregar Partida
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Factura</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Linea</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Producto</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Descripcion</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Cantidad</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Costo Unitario</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Valor Total</th>
                                <th className="text-left py-2 px-4 border-r border-gray-200">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.linea} className="border-b border-gray-200">
                                    <td className="py-2 px-4 border-r border-gray-200">{item.consecutivo}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{index + 1}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{item.producto}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{item.descripcion}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{item.cantidad}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{item.precio_unitario}</td>
                                    <td className="py-2 px-4 border-r border-gray-200">{item.valor_total}</td>
                                    <td className="py-2 px-4 flex border-r border-gray-200 justify-center">
                                        <button
                                            className="bg-blue-600 border py-2 px-2 w-20 text-white mr-2 text-sm uppercase font-bold"
                                            onClick={(clienteObj) => {}}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-600 border py-2 px-2 text-white mr-2 text-sm uppercase font-bold"
                                            onClick={(idItem) => {}}
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
        </>
    );
};
