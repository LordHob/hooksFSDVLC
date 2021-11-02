
import userEvent from '@testing-library/user-event';
import React, {useState,useEffect} from 'react';

import './Login.css';

const Login = () => {

    //Estados....

    useEffect(()=> {
    //Equivale a que el componente se ha montado por primera vez
    //se diferencia por los corchetes vacios de segundo argumento.
    //Sólo se ejecuta la primera vez.

        console.log("hola soy el componente y me he montado");

    },[]);

    useEffect(()=>{
        //Equivale al componente que se ha actualizado (componentDidUpdate),
        //se diferencia por no tener los corchetes. Cada vez que se actualiza un hook
        //se ejecuta esta función

        console.log(credentials);

        if(credentials.password === "1234"){
            setMensajeError("El password debe de ser menos estúpido");
        }
    });

    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});
    
    const [msgError, setMensajeError] = useState('');

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div className="designLogin">
            <div className="botonesLogin">
                <input  type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <input  type='password'  name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <div className="sendButton">Login</div>
                <div>{msgError}</div>
            </div>
            
        </div>
    )
};

export default Login;