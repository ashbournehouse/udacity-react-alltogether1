import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './Css/App.css';

import Header from './Components/Header.jsx'
import AddUser from './Components/AddUser.jsx'
import ShowUsers from './Components/ShowUsers.jsx'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
        <AddUser />
        <ShowUsers />
      </div>
    );
  }
}

export default App;
