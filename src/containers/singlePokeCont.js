import React, { useEffect, useState, useRef } from "react";
import SinglePokeInfo from "../components/SinglePokeInfo";
import ListItem from "../components/ListItem";


const SinglePokeCont = ({url}) => {

    const [selectedPoke, setSelectedPoke] = useState(null);

    useEffect(() => {
        loadPokemon()
    }, []);

    const loadPokemon = function(url){
        fetch(url)
        .then(res => res.json())
        .then(pokeSelect => setSelectedPoke(pokeSelect))
    };

    // <ListItem/>handleChoiceClick("choose").addEventListener("click", setSelectedPoke)};

    return(
        <div className="list-container">
            <h1>Single Poke info:</h1>
            <SinglePokeInfo 
            selectedPoke={selectedPoke}/>
        </div>
    )
};

export default SinglePokeCont;