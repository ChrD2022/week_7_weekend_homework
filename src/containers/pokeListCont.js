import './containers.css';
import React, { useState, useEffect } from "react";
import PokeList from "../components/PokeList";



const PokeListCont = () => {
    const [pokemons, setPokeList] = useState([]);
    const [ApiUrl, setDefaultUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

    useEffect(() => {
        loadPokemonList()
    }, []);

    const loadPokemonList = function(){
        fetch(ApiUrl)
        .then(res => res.json())
        .then(pokemonList => setPokeList(pokemonList.results))
    };


    return(
        <div className="list-container">
            <h1>ListContainer:</h1><br/>
            <PokeList pokemons={pokemons}/>
            <button className='button' >prev</button> <button className='button'>next</button>
        </div>
    )
};

export default PokeListCont;