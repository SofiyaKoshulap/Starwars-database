import React from 'react';


export default class Planets extends React.Component {

    render() {
        return (
            <div id='card'>
                <button onClick={this.props.changePlanet}>Next</button>
                <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/planets/${this.props.id}.jpg`} />
                <h3>{this.props.name}</h3>
                <ul>
                    <li>Diameter: {this.props.diameter}</li>
                    <li>Population: {this.props.population}</li>
                    <li>Climate: {this.props.climate}</li>
                </ul>
            </div>
        )
    }
}