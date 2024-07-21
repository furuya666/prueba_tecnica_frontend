import React, { useState} from 'react'
import {
    Layout,
} from 'antd';
import { Link} from 'react-router-dom';
const { Header} = Layout;
const Login = () => {
    const [datos, setDatos] = useState({
        nombres: '',
        contraseña: ''
    })
    
   
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    };
    
        fetch('http://localhost:5000/api/login',requestOptions)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.token.length >0) {
                
                window.location.replace("http://localhost:3000");
            }
            else {
            
                window.location.replace("http://localhost:3000/login");
            }
        })  
    }
    return (
        <div className="App">
            <Layout className="layout">
            <Header>
                    <div style={{ textAlign: 'right'}}>
                    <Link to="/register" >REGISTRAR</Link> <br/>
                   
                    </div>
                </Header>
            <div style={{ textAlign: 'CENTER' }}>
            <h1>LOGIN</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="nombres" className="form-control" onChange={handleInputChange} name="nombres"></input>
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

export default Login