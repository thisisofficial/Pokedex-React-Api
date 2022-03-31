import {Card} from '../Components/Card.js';
import { useEffect, useState } from 'react';
import React from 'react';
import {Link } from 'react-router-dom';
import './styles.css';

export function PokeList(){

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
            <Card key={item.name} name={item.name} url={item.url}/>
        );
    }
    return(
        <div className='contain'>
            <div className='titleCont'>
                <h1 className='emphasis'>Pokemones</h1>
            </div>
            
            <ul>
                {
                    pokemon.map((item) => RenderPokes(item))
                } 
            </ul>
        </div>
    );
}
