import React, { useEffect, useState, useRef } from "react";
import SinglePokeInfo from "../components/SinglePokeInfo";
import ListItem from "../components/ListItem";


const SinglePokeCont = () => {

    const [selectedPoke, setSelectedPoke] = useState(null);

    useEffect(() => {
        loadPokemon()
    }, []);

    const loadPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/4/')
        .then(res => res.json())
        .then(pokeSelect => setSelectedPoke(pokeSelect))
    };

    // <ListItem/>handleChoiceClick("choose").addEventListener("click", setSelectedPoke)};

    return(
        <div className="single-list-container">
            <h1>Single Poke info:</h1>
            <SinglePokeInfo 
            selectedPoke={selectedPoke}/>
        </div>
    )
};

export default SinglePokeCont;