import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import './styles.css';
import {LoginContext} from '../Helpers/LoginContext.js';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginButton() {
    const {user, setLogged, loggedIn} = useContext(LoginContext);

    function logIn(){
        return(
            <div className='container'>
              <p className='login-text text'>Not logged in</p>
                <Link to='/login'>
                    <div className='login'>
                        <p className='login-text'>Login</p>
                    </div>
                </Link>   
            </div>
            
        );
    }
    function logOut(){
        return(
            <div className='container'>
              <p className='login-text text'>Logged in as "{user}"</p>
                <a href='/logout'>
                    <div className='login'>
                        <p className='login-text'>LogOut</p>
                    </div>
                </a> 
                 
            </div>
        );
    }

  return (
    <>
        {loggedIn?logOut():logIn() } 
          
    </>
  )
}
