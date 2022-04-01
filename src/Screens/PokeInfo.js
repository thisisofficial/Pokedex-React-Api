import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PokeCard } from '../Components/PokeCard.js'

export function PokeInfo() {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState([]);


    const fetchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const PokemonJson = await response.json();
        setPokemon(PokemonJson);
    }

    useEffect(() => {
        fetchPokemon();
    }, [])


    return (
        <>
            <PokeCard pokemon={pokemon} />

        </>
    )
}