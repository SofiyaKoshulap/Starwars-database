import React from 'react';

export default class Persons extends React.Component {

    render() {
        return (
            <div id='card'>
                <button onClick={this.props.changePerson}>Next</button>
                <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/characters/${this.props.id}.jpg`} />
                <h3>{this.props.name}</h3>
                <ul>
                    <li>Gender:  {this.props.gender}</li>
                    <li>Birth Year: {this.props.birth_year}</li>
                    <li>Eye color:  {this.props.eye_color}</li>
                </ul>
            </div>
        )

    }
}
