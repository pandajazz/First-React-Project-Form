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


const onSubmit = () => {
  alert("Thanks for submitting our form!");
  
} 

const onCancel = () => {
  alert("See you soon! :)")
}




class App extends Component {
  constructor() {
    super();
    this.state = { 
      firstName: '',
      lastName: '', 
      mail: '',
      password: ''};
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      mail: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    })

  }

 /* handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });

    console.log(data);
  }
  */

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.mail)
    console.log(this.state.password)

  }
   
  
  render() {
    
    return (
    <div>
      <h1>Submit your Form:</h1>
      <form onSubmit={this.handleSubmit}>
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
          onClick={onSubmit}
        />
        <Button 
          name="Cancel"
          onClick={onCancel}
        />
      </form>
    </div>
    )
  }
}


export default App;