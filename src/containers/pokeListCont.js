import './containers.css';
import React, { useState, useEffect } from "react";
import PokeList from "../components/PokeList";
import ListItem from '../components/ListItem';



const PokeListCont = () => {

    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    const apiUrl = "http://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(pokemonList => setPokemons(pokemonList.results))
    }, []);

    const onSelectedPokemon = (pokemons) => {
        setSelectedPokemon(pokemons);
    }




    return(
        <div className="list-container">
            <h1>ListContainer:</h1><br/>
            {setPokemons ? <PokeList pokemons={setPokemons} onSelectedPokemon={onSelectedPokemon}/> : null }
            <PokeList pokemons={pokemons}/>
    

        </div>
    )
};

export default PokeListCont;