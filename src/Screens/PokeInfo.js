import	 { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams} from 'react-router-dom';
import {PokeCard} from '../Components/PokeCard.js'

export const PokeInfo = () =>{
    let {name} = useParams();
    let link = "https://pokeapi.co/api/v2/pokemon/"+name;

    const [pokemon, setPokemon] = useState();

    let type = ['fire'];
    const fetchPokemon = async () => {
        const response = await fetch(link);
        console.log(response.status);
        const PokemonJson = await response.json();
        console.log(PokemonJson);
        setPokemon(PokemonJson);
        console.log(pokemon)
    }

    useEffect(() =>{
        fetchPokemon();
    }, [])


    return(
        <>
           <PokeCard id='0' name='Bulbasaur' weight='100' height='100' sprite='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' types={type}></PokeCard>
            
        </>
    )
}