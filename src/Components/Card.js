import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import './styles.css';

export const Card = (props)=>{

    const [pokemonimg, setPokemonimg] = useState();

    const fetchPokemon = async () => {
        const response = await fetch(props.url);
        const PokemonJson = await response.json();
        setPokemonimg(PokemonJson.sprites["front_default"]);
        
    }

    useEffect(() =>{
        fetchPokemon();
    }, [])

    return(
        <Link to={{
            pathname:`/Pokemon/${props.name}`, 
            state:{pokemon: `${props.url}`}
        }}>
            <div className='button'>
                <p className='pokemon'>{props.name}</p>
                <img className='cardSprite' src={pokemonimg}></img>
            </div>
        </Link>
    )
}


