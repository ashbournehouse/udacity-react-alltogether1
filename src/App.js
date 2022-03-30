import React, { Component } from 'react';
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
  
  capitaliseString(value) {
    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
  }

  addPlayer = (username, firstname, lastname) => {
      // Find next id
    const playerIds = this.state.players.map(player => player.id);
    const nextId = Math.max( ...playerIds ) + 1;
      // Check existing usernames
    const usernames = this.state.players.map(player => player.username);
    if (usernames.includes(username)) {
      //issue and alert
      alert("Duplicate username, nothing is being saved!")
    } else {
        // Add new user
      this.setState(oldState => ({
        players: [...oldState.players, {
                   id: nextId, 
                   username: username,
                   firstname: this.capitaliseString(firstname),
                   lastname: this.capitaliseString(lastname),
                   gamesplayed: 0
                  }],
      }));
    }
  };

  render() {
    return (
      <div className="App">
      	<Header />
        <AddUser addPlayer={this.addPlayer}/>
        <ShowPlayers players={this.state.players}/>
      </div>
    );
  }
}

export default App;
