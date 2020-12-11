import React from 'react';


function Planets(props) {
    return (
        <div id='card'>
            <button onClick={props.changePlanet}>Next</button>
            <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} />
            <h3>{props.name}</h3>
            <ul>
                <li>Diameter: {props.diameter}</li>
                <li>Population: {props.population}</li>
                <li>Climate: {props.climate}</li>
            </ul>
        </div>
    )
}
export default Planets;