import React from 'react';


export default class Starships extends React.Component {

    render() {
        return (
            <div id='card'>
                <button onClick={this.props.changeStarship}>Next</button>
                <img alt="SOME IMG" src={`https://starwars-visualguide.com/assets/img/starships/${this.props.id}.jpg`} />
                <h3>{this.props.name}</h3>
                <ul>
                    <li>Model: {this.props.model}</li>
                    <li>Max atmosphering speed: {this.props.max_atmosphering_speed}</li>
                    <li>Length: {this.props.length}</li>
                </ul>
            </div>
        )
    }
}