import React from "react";

const Move = ({move}) => {

    const capitalise = (bigname) => {
        return (bigname[0].toUpperCase() + bigname.slice(1))
    };

    return(
        <li className="move-list-item">{capitalise(move.move.name)}, </li>
    )
};

export default Move;