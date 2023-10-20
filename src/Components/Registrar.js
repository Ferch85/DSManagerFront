import React, { useState } from "react";
import Alerta from "./Alerta";
import axios from "axios";

const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if ([email, password, repetirPassword, name].includes("")) {
      setAlerta({
        msg: "Todos los campos sol obligatorios",
        error: true,
      });
    }
    if(password !== repetirPassword){
        setAlerta({
            msg: "El password no coincide",
            error: true,
        })
    }
    setAlerta({});
    try {
        const url = "http://localhost:3001/api";
        await axios.post(url+'/users', { name, email, password })
        //Se cambio importando el cliente desde axops.jsx para hacer mas corto el codigo
        //await axios.post('/veterinarios', { nombre, email, password })
        setAlerta({
            msg: 'Creado correctamente',
            error: false
        })        
        
    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })        
    }
  };
  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Administra{" "}
          <span className="text-black">tu DataStage</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handlerSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu Nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de Registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Repetir Password
            </label>
            <input
              type="password"
              placeholder="Repite tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={repetirPassword}
              onChange={(e) => {
                setRepetirPassword(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between"></nav>
      </div>
    </>
  );
};

export default Registrar;
