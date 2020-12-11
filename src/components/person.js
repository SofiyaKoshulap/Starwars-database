import React from 'react';

function Persons(props) {
    return (
        <div id='card'>
            <button onClick={props.changePerson}>Next</button>
            <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} />
            <h3>{props.name}</h3>
            <ul>
                <li>Gender:  {props.gender}</li>
                <li>Birth Year: {props.birth_year}</li>
                <li>Eye color:  {props.eye_color}</li>
            </ul>
        </div>
    )

}
export default Persons;

