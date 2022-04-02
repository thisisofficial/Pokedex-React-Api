import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import logo from './pokeapi.png';
import { LoginButton } from './LoginButton';

export function NavBar() {
  return (
    <>
      <div className="nav">
        <Link className="logo-container" to='/'>
          <img className="logo" src={logo} />
        </Link>

        <div className="links">
          <Link className="link" to='/' state=''>Home</Link>
          <Link className="link" to={{
            pathname: '/Pokemon/charizard',
            state: { pokemon: 'https://pokeapi.co/api/v2/pokemon-species/6/' }
          }}>Charizard</Link>
          <Link className="link"  to={{
            pathname: '/Pokemon/mewtwo',
            state: { pokemon: 'https://pokeapi.co/api/v2/pokemon-species/150/' }
          }}>Mewtwo</Link>
        </div>

        <div className='signarea'>
          <LoginButton/>
        </div>
      </div>
    </>
  )
}
