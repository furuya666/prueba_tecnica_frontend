import React from 'react'
import {
    Layout,
} from 'antd';
import { useState } from 'react';

import { Link} from 'react-router-dom';
const { Header} = Layout;
function User() {
    const [datos, setDatos] = useState({
        nombres: '',
        apellido_paterno: '',
        apellido_materno: '',
        contraseña: ''
    })

    const handleInputChange = (event) => {
       
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        console.log(datos);
        event.preventDefault()
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    };
    fetch('http://localhost:5000/api/users', requestOptions)
        .then(response => response.json())
        .then(result => console.log(result) );
        console.log('enviando datos...' )

        window.location.replace("http://localhost:3000/login");
    }

    return (
        <div className="App">
            <Layout className="layout">
                <Header>
                    <div style={{ textAlign: 'right' }}>
                        <Link to="/" >INICIO</Link>
                    </div>
                </Header>
                
            
            <div style={{ textAlign: 'CENTER' }}>
            <h1>FORMULARIO REGISTRO USUARIO</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombres" className="form-control" onChange={handleInputChange} name="nombres"></input>
                </div>
                <br/>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido Paterno" className="form-control" onChange={handleInputChange} name="apellido_paterno"></input>
                </div>
                <br/>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido Materno" className="form-control" onChange={handleInputChange} name="apellido_materno"></input>
                </div>
                <br/>
                <div className="col-md-3">
                    <input type="text" placeholder="Contraseña" className="form-control" onChange={handleInputChange} name="contraseña"></input>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            </div>

            
           
       





            </Layout>

        </div>
    );
}

export default User