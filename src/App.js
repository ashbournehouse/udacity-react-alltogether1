import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './Css/App.css';

import Header from './Components/Header.jsx'
import AddUser from './Components/AddUser.jsx'
import ShowPlayers from './Components/ShowPlayers.jsx'

class App extends Component {
    // Put the dummy player list into 'state'
  state = {
    players: [
      {"id": 1, "firstname": "Karen",   "lastname": "Isgrigg",  "username": "karen_isgrigg",   "gamesplayed": 0},
      {"id": 2, "firstname": "Richard", "lastname": "Kalehoff", "username": "richardkalehoff", "gamesplayed": 0},
      {"id": 3, "firstname": "Tyler",   "lastname": "McGinnis", "username": "tylermcginnis",   "gamesplayed": 0},
    ]
  }
  render() {
    return (
      <div className="App">
      	<Header />
        <AddUser />
        <ShowPlayers players={this.state.players}/>
      </div>
    );
  }
}

export default App;
