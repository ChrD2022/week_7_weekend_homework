import React from "react";


const ListItem = ({pokemon, handleClick}) => {


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



    
    return(
        <div>
            <li className="list-item" >{Dex()} : {capitalise(pokemon.name)} <br/> 
                <button className='button' id='choose' onClick={handleClick} value={pokemon.url}>I choose you!</button>
            </li>
            <hr/>
        </div>
    )
};

export default ListItem;