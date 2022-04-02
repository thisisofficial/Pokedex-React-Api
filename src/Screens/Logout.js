import React from 'react'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../Helpers/LoginContext.js';

export function Logout() {
    const nav = useNavigate();
    const {setLogged} = useContext(LoginContext);
    useEffect(() => {
        logout();
    }, [])

    function logout(){
        setLogged(false);
        nav("/login");
    }
  return (
    <>
        <p>logginout</p>
    </>
  )
}
