import React from "react";

const SinglePokeInfo = ({selectedPoke}) => {
    if (selectedPoke == null || selectedPoke.length === 0) {
        return <p>Pick one...</p>;
    }

    const capitalise = (bigname) => {
        return bigname[0].toUpperCase() + bigname.slice(1);
    };

    return(
        <div>
            <img src={selectedPoke.sprites.front_default} /><br/>
            ID : {selectedPoke.id}
            Name : {capitalise(selectedPoke.name)}<br/>
            Height : {selectedPoke.height}<br/>
            Weight : {selectedPoke.weight}<br/>
        </div>
    )
};

export default SinglePokeInfo;