import React from 'react';
import logo from '../Images/logo.svg';
//import '../Css/App.css';

// Use a stateless functional component instead of a class

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ReactND - Coding Practice</h1>
      <h4 className="App-description">This is exercise 'All Together 1" from Lesson 2</h4>  
      <h4 className="App-description">This header rendered using a stateless functional component</h4>  
    </header>
  )
}

export default Header