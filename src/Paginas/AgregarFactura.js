import React, { useEffect, useState } from "react";
import FormularioFacturas from "../Components/FormularioFacturas";
import { ListadoPartidas } from "../Components/ListadoPartidas";
import clienteAxios from "axios";

const AgregarFactura = () => {
    const [idFactura, setIdFactura] = useState();
    useEffect(() => {
        if(idFactura){
            clienteAxios
            .get("http://localhost:3001/api/facturas"+idFactura)
            .then((response) => {
                setIdFactura(response.data);                                
            })
            .catch((error) => {
                console.error("Error al hacer la solicitud", error);
            });
        }

    },[])
    const mostrarPartidas = (idFact) => {
        setIdFactura(() => {
            return idFact;
        });
        
    }
    return (
        <div className="">
            <div className="block flex flex-col">            
                <FormularioFacturas mostrarPartidas={mostrarPartidas} />
                { idFactura&& <ListadoPartidas idFactura={idFactura}/> }
                
            </div>
        </div>
    );
};

export default AgregarFactura;
