import {Card} from './Card.js';
import { useEffect, useState } from 'react';
import React from 'react';
import {Link } from 'react-router-dom';

export function Loader(){

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokes()
    }, [])

    const getPokes = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        const pokemons = await data.json()
        setPokemon(pokemons.results)
    }

    function RenderPokes(item){
        let link = "/Pokemon/"+ item.name;
        return(
            <Link to={link}> <Card key={item.name} name={item.name}/></Link>
        );
    }
    return(
        <div>
            <h1>Pokemones</h1>
            <ul>
                {
                    pokemon.map((item) => RenderPokes(item))
                } 
            </ul>
        </div>
    );
}
