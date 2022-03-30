import React from 'react';
import '../Css/ShowPlayers.css';

class ShowPlayers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showGames: false,
    };
    this.toggleGamesDisplay = this.toggleGamesDisplay.bind(this);
  }
  
  toggleGamesDisplay() {
    this.setState(state => ({
      showGames: !state.showGames
    }));
  }
  
  render () {
    return (
      <div className="show-players">
        <h4 className="show-players-description">This div is rendered by the ShowPlayers Component</h4>
        <ul className="players-list">
          {this.props.players.map((player) => (
            <li key={player.id} className="listed-player">
              <p>User ID: {player.id} Username: {player.username}</p>
              <p>Name: {player.firstname} {player.lastname}</p>
              {this.state.showGames ? <p>Games played: {player.gamesplayed}</p> : "" }
            </li>
          ))}
        </ul>
        <div className="show-games-controls">
          <button 
            className="submit-button" 
            onClick={this.toggleGamesDisplay}>
            {this.state.showGames ? "Hide Games" : "Show Games" }
          </button>
        </div>
      </div>
    )
  }
}

export default ShowPlayers