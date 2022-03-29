import React from 'react';
import '../Css/ShowPlayers.css';

// Use a stateless functional component instead of a class

function ShowPlayers(props) {
  return (
    <div className="show-players">
      <h4 className="show-players-description">This div is rendered by the ShowPlayers Component</h4>
      <ul className="players-list">
        {props.players.map((player) => (
          <li key={player.id} className="listed-player">
            <p>User ID: {player.id} Username: {player.username}</p>
            <p>Name: {player.firstname} {player.lastname}</p>
            <p>Games played: {player.gamesplayed}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowPlayers