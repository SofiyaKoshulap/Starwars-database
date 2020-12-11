import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div>
                    <nav>
                        <ul>
                            <li onClick={this.props.showPersons}>Persons</li>
                            <li onClick={this.props.showPlanets}>Planets</li>
                            <li onClick={this.props.showStarshps}>Starships</li>
                        </ul>
                    </nav>
                </div>
            </header>

        )

    }
}
