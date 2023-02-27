import React, { useState } from "react";

const ListItem = ({pokemon, handleChoiceClick}) => {

    // const [url, setUrl] = useState('')


    const Dex = () =>{
        const URL = `${pokemon.url}`
        const newString = URL.replace('https://pokeapi.co/api/v2/pokemon/', '')
        console.log(newString)
        const newString1 = newString.split('/')
        return newString1
    }

    const capitalise = (bigname) => {
        return bigname[0].toUpperCase() + bigname.slice(1);
    };

    const handleClick = (event) => {
        handleChoiceClick(event.target.value)
    }

    // const handleChoiceClick = () => {
    //     (`${pokemon.url}`)
    // };

    return(
        <div>
            <li className="list-item" >{Dex()} : {capitalise(pokemon.name)} <br/> <button className='button' id='choose' onClick={handleClick}>I choose you!</button></li><hr/>
        </div>
    )
};

export default ListItem;