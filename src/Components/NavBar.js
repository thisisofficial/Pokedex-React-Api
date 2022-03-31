import React from 'react'
import './styles.css';
import {Link } from 'react-router-dom';
import logo from './pokeapi.png';

export function NavBar() {
  return (
    <>
      <div className="nav">
        <Link className="logo-container" to='/'>
          <img className="logo" src={logo}/>
        </Link> 

        <div className="links">
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/Pokemon/charizard'>Charizard</Link>
          <Link className="link" to='/Pokemon/mewtwo'>Mewtwo</Link>
        </div>

        <div className='signarea'>

        </div>
      </div>
    </>
  )
}
