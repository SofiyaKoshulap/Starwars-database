import React from 'react';
import './App.css';
import Header from './components/header';
import SwService from './services/sw-service';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 1 }

  }
  showPersons(e) {
    this.setState({ page: 1 })
  }

  showPlanets(e) {
    this.setState({ page: 2 })
  }

  showStarshps(e) {
    this.setState({ page: 3 })
  }
  render() {
    return (
      <div className="App">
        <Header showPersons={this.showPersons.bind(this)} showPlanets={this.showPlanets.bind(this)} 
        showStarshps={this.showStarshps.bind(this)}/>,
        <SwService page={this.state.page} />
      </div>
    )
  }
}



