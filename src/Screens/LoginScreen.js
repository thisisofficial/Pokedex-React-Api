import React from 'react'
import { LoginForm } from '../Components/LoginForm';
import { useState, useContext } from 'react';
import { LoginContext } from '../Helpers/LoginContext';
import { useNavigate } from 'react-router-dom';

export function LoginScreen() {
    const adminUser = {
        user: "admin",
        password: "admin123"
    }

    const navigate = useNavigate();

    const  {setUser} = useContext(LoginContext);
    const [error, setErro] = useState("");
    const {setLogged} = useContext(LoginContext);

    const Login = details => {
        console.log(details);
        if(details.name == adminUser.user && details.password == adminUser.password){
            console.log("logged in");
            setLogged(true);
            setUser(details.name);
            navigate("/");

        }
        else{
            console.log("error");
        }
    }
  return (
    <>
        <LoginForm Login={Login} error={error}></LoginForm>
    </>
  )
}
