import '../containers/containers.css';
import React from "react";
import ListItem from "./ListItem";

const PokeList = ({pokemons}) => {

    const pokeItems = pokemons.map((pokemon, index) => {
        return <ListItem pokemon={pokemon} key={index}/>
    });

    

    return(
        <div className='list'>
            <ul>
            {pokeItems}
            </ul>
        </div>
    )
};

export default PokeList;