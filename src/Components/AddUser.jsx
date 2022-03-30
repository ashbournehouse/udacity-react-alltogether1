import React from 'react';
import '../Css/AddUser.css';


class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.props.addPlayer.bind(this);
  };

  state = {
    userNameEntry: '',
    firstNameEntry: '',
    lastNameEntry: '',
  };
  
  handleUserName = (event) => {this.setState({ userNameEntry: event.target.value })};
  handleFirstName = (event) => {this.setState({ firstNameEntry: event.target.value })};
  handleLastName = (event) => {this.setState({ lastNameEntry: event.target.value })};
  
  onSubmit = (event) => {   
    this.addPlayer(this.state.userNameEntry, this.state.firstNameEntry, this.state.lastNameEntry);
    this.setState({ userNameEntry: "", firstNameEntry: "", lastNameEntry: ""})
  };
  
  entriesComplete(){
    return ((this.state.userNameEntry !== "") 
            && (this.state.firstNameEntry !== "") 
            && (this.state.lastNameEntry !== ""))
  };

  render() {
    return (
      <div className="add-user">
        <h4 className="add-user-heading">This div is rendered by the AddUser Component (using CSS grid)</h4>
        <h5 className="username-input-label">Username: <span className="required-indicator">*</span></h5>
        <input
          className="username-entry"
          type="text"
          placeholder="Enter Username"
          value={this.state.userNameEntry}
          onChange={this.handleUserName}
        />
        <h5 className="firstname-input-label">First Name: <span className="required-indicator">*</span></h5>
        <input
          className="firstname-entry"
          type="text"
          placeholder="Enter First Name"
          value={this.state.firstNameEntry}
          onChange={this.handleFirstName}
        />
        <h5 className="lastname-input-label">Last Name: <span className="required-indicator">*</span></h5>
        <input
          className="lastname-entry"
          type="text"
          placeholder="Enter Last Name"
          value={this.state.lastNameEntry}
          onChange={this.handleLastName}
        />
        <p className="required-field-note"><span className="required-indicator">*</span> indicates a required field.</p>
        <div className="controls">
          <button 
            className="submit-button" 
            onClick={this.onSubmit}          
            disabled={!this.entriesComplete()}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default AddUser