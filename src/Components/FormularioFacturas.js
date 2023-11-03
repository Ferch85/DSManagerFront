import React, { useState } from "react";
import Alerta from "./Alerta";
import clienteAxios from 'axios';
import { useNavigate } from "react-router-dom";

const FormularioFacturas = (props) => {
    const [factura, setFactura] = useState("");
    const [fecha, setFecha] = useState("");
    const [generador, setGenerador] = useState("");
    const [cliente, setCliente] = useState("");
    const [id, setId] = useState("");
    const [alerta, setAlerta] = useState({});
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([factura, fecha, generador, cliente].includes("")) {
          setAlerta({
            msg: "Todos los campos sol obligatorios",
            error: true,
          });
          return;
        }
        try {
          const url = "http://localhost:3001/api";
          const { data } = await clienteAxios.post(url + "/factura", {
            numfactura: factura,
            fechafactura: fecha,
            generador,
            cliente,
          });
          //setDataF(data);          
          props.mostrarPartidas(data.rows.insertId);
          //navigate("facturas");
          
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true,
          });
        }


        
        
    };
    const { msg } = alerta;

    return (
        <>              
            <form className="bg-white pb-5 px-5 mb-10 lg:mb-5 shadow-md rounded-md" onSubmit={handleSubmit}>                
                <h2 className="font-bold pb-5 uppercase mb-2 text-indigo-600">Informacion General De La Factura</h2>
                <div className="flex space-x-32">
                    <div className="mb-5">
                        <label htmlFor="clave" className="text-grey-700 uppercase font-bold block">
                            Numero de Factura:
                        </label>
                        <input
                            id="clave"
                            type="text"
                            placeholder="Numero de factura"
                            className="border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={factura}
                            onChange={(e) => setFactura(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="nombre" className="text-grey-700 uppercase font-bold block">
                            Fecha de Factura
                        </label>
                        <input
                            id="nombre"
                            type="date"
                            placeholder="Nombre del cliente"
                            className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="rfc" className="text-grey-700 uppercase font-bold block">
                            Generador
                        </label>
                        <input
                            id="rfc"
                            type="text"
                            placeholder="RFC del Cliente"
                            className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={generador}
                            onChange={(e) => setGenerador(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="telefono" className="text-grey-700 uppercase font-bold block">
                            Cliente
                        </label>
                        <input
                            id="telefono"
                            type="text"
                            placeholder="Telefono del Cliente"
                            className="border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <br/>
                        <input
                            type="submit"
                            className="bg-green-600 mt-2 p-2 text-white uppercase font-bold hover:bg-green-700 h-10 cursor-pointer transition-colors"
                            value={id ? "Guardar Cambios" : "Guardar Cliente"}
                        />
                    </div>
                </div>
            </form>
            {msg && <Alerta alerta={alerta} />}
        </>
    );
};

export default FormularioFacturas;
