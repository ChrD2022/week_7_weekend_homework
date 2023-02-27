import React from "react";

const Move = ({move}) => {

    return(
        <li className="move-list-item">{move.move.name}</li>
    )
};

export default Move;