import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NBA from 'nba';
import SearchBar from './SearchBar';
import Button from './Button';

class App extends Component {
  render() {
    const player = NBA.findPlayer("Jaylen Brown");
    console.log(player);
    const name = 'Search for a player';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sports App!</h1>
        </header>
        <SearchBar/>
        <Button name={name}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
