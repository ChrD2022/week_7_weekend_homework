import React, { useEffect, useState } from "react";
import SinglePokeInfo from "../components/SinglePokeInfo";



const SinglePokeCont = () => {

    const [selectedPoke, setSelectedPoke] = useState(null);

    useEffect(() => {
        loadPokemon()
    }, []);

    const loadPokemon = function(url){
        fetch(url)
        .then(res => res.json())
        .then(pokeSelect => setSelectedPoke(pokeSelect))
    };

    return(
        <div className="single-list-container">
            <h1>Single Poke info:</h1>
            <SinglePokeInfo 
            selectedPoke={selectedPoke}/>
        </div>
    )
};

export default SinglePokeCont;