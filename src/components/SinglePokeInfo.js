import React from "react";
import Move from "./move";

const SinglePokeInfo = ({selectedPoke}) => {
    if (selectedPoke == null || selectedPoke.length === 0) {
        return <p>Pick one...</p>;
    }

    const capitalise = (bigname) => {
        return bigname[0].toUpperCase() + bigname.slice(1);
    };

    const meterHeight = (input) => {
        return input/10;
    };

    const moveList = selectedPoke.moves.map((move, index) => {
        return <Move move={move} key={index}/>
    });


    return(
        <div>
            <img className="sprite" src={selectedPoke.sprites.front_default} /><br/>
            ID : {selectedPoke.id}<br/>
            Name : {capitalise(selectedPoke.name)}<br/>
            Type : {capitalise(selectedPoke.types[0].type.name)}<br/>
            Height : {meterHeight(selectedPoke.height)} m<br/>
            Weight : {meterHeight(selectedPoke.weight)} kg<br/>
            Can Learn : <ul className="move-list">{moveList}</ul>
        </div>
    )
};

export default SinglePokeInfo;