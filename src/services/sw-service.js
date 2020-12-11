import React from 'react';
import axios from 'axios';
import Persons from '../components/person';
import Planets from '../components/planets';
import Starships from '../components/starships';

export default class SwService extends React.Component {
    constructor() {
        super();
        this.state = {
            countPerson: 0,
            idPerson: 1,
            countStarships: 0,
            idStarships: 2,
            countPlanets: 0,
            idPlanets: 1,
            person: [],
            planet: [],
            starship: []
        };
    }

    componentDidMount() {
        axios.get(`http://swapi.dev/api/people/`)
            .then((response) => {
                console.log(response)
                this.setState({ countPerson: response.data.count })
            })
            .catch(error => console.log(error));

        axios.get(`http://swapi.dev/api/people/${this.state.idPerson}/`)
            .then((response) => {
                console.log(response)
                this.setState({ person: response.data })
            })
            .catch(error => console.log(error));

        axios.get(`http://swapi.dev/api/planets/`)
            .then((response) => {
                console.log(response)
                this.setState({ countPlanets: response.data.count })
            })
            .catch(error => console.log(error));

        axios.get(`http://swapi.dev/api/planets/${this.state.idPlanets}/`)
            .then((response) => {
                console.log(response)
                this.setState({ planet: response.data })
            })
            .catch(error => console.log(error));

        axios.get(`http://swapi.dev/api/starships/`)
            .then((response) => {
                console.log(response)
                this.setState({ countStarships: response.data.count })
            })
            .catch(error => console.log(error));

        axios.get(`http://swapi.dev/api/starships/${this.state.idStarships}/`)
            .then((response) => {
                console.log(response)
                this.setState({ starship: response.data })
            })
            .catch(error => console.log(error));

    }

    changePerson(event) {
        if (this.state.idPerson < this.state.countPerson) {
            this.setState(prev => {
                return {
                    idPerson: prev.idPerson + 1
                };
            });

        } else {
            this.setState({ idPerson: 1 })
        }
        axios.get(`http://swapi.dev/api/people/${this.state.idPerson + 1}/`)
            .then((response) => {
                console.log(response)
                this.setState({ person: response.data })
            })
            .catch(error => console.log(error));

    }

    changePlanet(event) {
        if (this.state.idPlanets < this.state.countPlanets) {
            this.setState(prev => {
                return {
                    idPlanets: prev.idPlanets + 1
                };
            });

        } else {
            this.setState({ idPlanets: 1 })
        }
        axios.get(`http://swapi.dev/api/planets/${this.state.idPlanets + 1}/`)
            .then((response) => {
                console.log(response)
                this.setState({ planet: response.data })
            })
            .catch(error => console.log(error));

    }
    changeStarship(event) {
        if (this.state.idStarships < this.state.countStarships) {
            this.setState(prev => {
                return {
                    idStarships: prev.idStarships + 1
                };
            });

        } else {
            this.setState({ idStarships: 1 })
        }
        axios.get(`http://swapi.dev/api/starships/${this.state.idStarships + 1}/`)
            .then((response) => {
                console.log(response)
                this.setState({ starship: response.data })
            })
            .catch(error => console.log(error));

    }

    render() {


        if (this.props.page === 1) {
            return <Persons name={this.state.person.name} gender={this.state.person.gender}
                birth_year={this.state.person.birth_year} eye_color={this.state.person.eye_color}
                id={this.state.idPerson} changePerson={this.changePerson.bind(this)} />
        } else if (this.props.page === 2) {

            return <Planets name={this.state.planet.name} diameter={this.state.planet.diameter}
                population={this.state.planet.population} climate={this.state.planet.climate}
                id={this.state.idPlanets} changePlanet={this.changePlanet.bind(this)} />
        } else {
            return <Starships name={this.state.starship.name} model={this.state.starship.model}
                max_atmosphering_speed={this.state.starship.max_atmosphering_speed}
                length={this.state.starship.length}
                id={this.state.idStarships} changeStarship={this.changeStarship.bind(this)} />
        }



    }
}