import React, { useEffect, useState } from "react";
import clienteAxios from "axios";
import { Link } from "react-router-dom";

const Facturas = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        clienteAxios
            .get("http://localhost:3001/api/factura")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error al hacer la solicitud", error);
            });
    }, []);

    return (
        <div className="ml-5">
            <div className="flex">
                <h2 className="text-2xl font-bold mb-4 ">Facturas</h2>
                <Link to="/main/agregar"  className="bg-green-500 text-2xl font-bold ml-4 mb-4 mr-4 px-2 py-1 text-white border text-sm rounded">+ Agergar Factura</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="border-b border-gray-200">
                        <tr>
                            <th className="text-left py-2 px-4 border-r border-gray-200">Numero de Factura</th>
                            <th className="text-left py-2 px-4 border-r border-gray-200">Fecha de Factura</th>
                            <th className="text-left py-2 px-4 border-r border-gray-200">Generador</th>
                            <th className="text-left py-2 px-4 border-r border-gray-200">Cliente</th>
                            <th className="text-left py-2 px-4 border-r border-gray-200">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.consecutivo} className="border-b border-gray-200">
                                <td className="py-2 px-4 border-r border-gray-200">{item.numfactura}</td>
                                <td className="py-2 px-4 border-r border-gray-200">{item.fechafactura}</td>
                                <td className="py-2 px-4 border-r border-gray-200">{item.generador}</td>
                                <td className="py-2 px-4 border-r border-gray-200">{item.cliente}</td>
                                <td className="py-2 px-4 flex border-r border-gray-200">
                                    <button
                                        className="bg-blue-600 border py-2 px-2 w-20 text-white mr-2 text-sm uppercase font-bold"
                                        onClick={(clienteObj) => {
                                           
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="bg-red-600 border py-2 px-2 text-white mr-2 text-sm uppercase font-bold"
                                        onClick={(idItem) => {
                                            
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

export default Facturas;
