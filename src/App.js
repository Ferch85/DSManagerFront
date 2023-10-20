import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Components/Login';
import AuthLayout from './layout/AuthLayout';
import Registrar from './Components/Registrar';
import Main from './Components/Main';
import { AdministrarClientes } from './Components/AdministrarClientes';



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(error => {
      console.error('Error al hacer la solicitud', error)
    })
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />}/>
          <Route path="Registrar" element={<Registrar />}/>          
        </Route>
        <Route path="/main" element={<Main />}>
            <Route index element={<AdministrarClientes />}/>   
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
