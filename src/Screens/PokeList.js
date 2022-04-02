import {Card} from '../Components/Card.js';
import { useEffect, useState } from 'react';
import React from 'react';
import './styles.css';

export function PokeList(){
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        getPokes()
    }, [])

    const getPokes = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126')
        const pokemons = await data.json()
        setPokemones(pokemons.results)
    }

    function RenderPokes(item){
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
                    pokemones.map((item) => RenderPokes(item))
                } 
            </ul>
        </div>
    );
}
