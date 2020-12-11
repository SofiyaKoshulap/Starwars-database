import React from 'react';
import './App.css';
import Header from './components/header';
import SwService from './services/sw-service';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 1 }

  }
  show(page ) {
    this.setState({ page })
  }
  render() {
    return (
      <div className="App">
        <Header 
          showPersons={this.show.bind(this, 1)} 
          showPlanets={this.show.bind(this, 2)}  
          showStarshps={this.show.bind(this, 3)}/>, 
        <SwService page={this.state.page} />
      </div>
    )
  }
}



