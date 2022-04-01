import { useEffect, useState } from 'react';
import React from 'react';
import { useParams} from 'react-router-dom';
import {PokeCard} from '../Components/PokeCard.js'

export function PokeInfo(props){
    let {name} = useParams();
    let link = "";   
        link = "https://pokeapi.co/api/v2/pokemon/"+name;  

    const [pokeName, setName] = useState();
    const [pokeId, setId] = useState();
    const [pokeWeight, setWeight] = useState();
    const [pokeHeight, setHeight] = useState();
    const [pokeSprite, setSprite] = useState();

    let type = ['fire'];
    const fetchPokemon = async () => {
        const response = await fetch(link);
        const PokemonJson = await response.json();
        setName(PokemonJson.name);
        setId(PokemonJson.id);
        setWeight(PokemonJson.weight);
        setHeight(PokemonJson.height);
        setSprite(PokemonJson.sprites['other']['official-artwork'].front_default);
        console.log(PokemonJson);
    }

    useEffect(() =>{
        fetchPokemon();
    }, [])


    return(
        <>
           <PokeCard id={pokeId} name={pokeName} height={pokeHeight} weight={pokeWeight} sprite={pokeSprite}></PokeCard>
            
        </>
    )
}