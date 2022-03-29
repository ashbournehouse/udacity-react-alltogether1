import React from 'react';
import '../Css/AddUser.css';


class AddUser extends React.Component {
  
  state = {
    userNameEntry: '',
    firstNameEntry: '',
    lastNameEntry: '',
  };
  
  handleUserName = (event) => {this.setState({ userNameEntry: event.target.value })};
  handleFirstName = (event) => {this.setState({ firstNameEntry: event.target.value })};
  handleLastName = (event) => {this.setState({ lastNameEntry: event.target.value })};
  
  render() {
    return (
      <div className="add-user">
        <h4 className="add-user-description">This div is rendered by the AddUser Component</h4>
        <h5 className="input-label">Username: <span className="required-indicator">*</span></h5>
        <input
          className="text-input"
          type="text"
          placeholder="Enter Username"
          value={this.state.userNameEntry}
          onChange={this.handleUserName}
        />
        <h5 className="input-label">First Name: <span className="required-indicator">*</span></h5>
        <input
          className="text-input"
          type="text"
          placeholder="Enter First Name"
          value={this.state.firstNameEntry}
          onChange={this.handleFirstName}
        />
        <h5 className="input-label">Last Name: <span className="required-indicator">*</span></h5>
        <input
          className="text-input"
          type="text"
          placeholder="Enter Last Name"
          value={this.state.lastNameEntry}
          onChange={this.handleLastName}
        />
        <p className="required-field-note"><span className="required-indicator">*</span> indicates a required field</p>
      </div>
    )
  }
}

export default AddUser