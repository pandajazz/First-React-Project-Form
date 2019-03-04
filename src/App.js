import React, { Component } from 'react';


const Input = ({
  name,
  type,
  value,
  onChange
}) => {
  return (
    <input 
      placeholder={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

const Button = ({
  onClick, 
  name
}) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      firstName: '',
      lastName: '', 
      mail: '',
      password: ''};
    
    this.baseState = this.state;

  
  }


  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleEmailChange = (e) =>  {
    this.setState({
      mail: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();    
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.mail)
    console.log(this.state.password)
    
  }

  handleResetForm = () => {
    this.setState(this.baseState);
  }

  render() {
    
    return (
    <div>
      <h1>Submit your Form:</h1>
      <form>
        <label>
          First Name
          <Input 
          name="Insert your first name:"
          type="text"
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
          />
        </label>
        <br /> 
        <label>
          Last Name
          <Input 
          name="Insert your last name:"
          type="text"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          />
        </label>
        <br />
        <label>
          E-Mail
          <Input 
            name="Insert your email:"
            type="mail"
            value={this.state.value}
            onChange={this.handleEmailChange}
            />
        </label>
        <br />
        <label>
          Password
          <Input 
            name="Insert your password:"
            type="password"
            value={this.state.value}
            onChange={this.handlePasswordChange}
            />
        </label>
        <br />
        <Button 
          name="Submit"
          onClick={this.handleSubmit}
        />
        <Button 
          name="Cancel"
          onClick={this.handleResetForm}
        />
      </form>
    </div>
    )
  }
}


export default App;