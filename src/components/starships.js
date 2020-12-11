import React from 'react';


function Starships(props) {
    return (
        <div id='card'>
            <button onClick={props.changeStarship}>Next</button>
            <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/starships/${props.id}.jpg`} />
            <h3>{props.name}</h3>
            <ul>
                <li>Model: {props.model}</li>
                <li>Max atmosphering speed: {props.max_atmosphering_speed}</li>
                <li>Length: {props.length}</li>
            </ul>
        </div>
    )
}
export default Starships;