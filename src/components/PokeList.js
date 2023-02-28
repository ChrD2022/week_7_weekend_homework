import '../containers/containers.css';
import React from "react";
import ListItem from "./ListItem";

const PokeList = ({pokemons, onSelectedPokemon}) => {


    const handleClick = (event) => {
        const chose_me = pokemons[event.target.value];
        onSelectedPokemon(chose_me)
    }

    const pokeItems = pokemons.map((pokemon, index) => {
        return <select pokemon= {pokemon} key={index} value={index}/>
    });

    

    return(
        <>
        <div className='list'>
            
            <button onChange={handleClick}/>
            
            {pokeItems}
            
        </div>
        </>
    )
};

export default PokeList;