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
      text: '', 
      mail: '',
      password: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
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
   
  
  render() {
    
    return (
    <div>
      <h1>Submit your Form:</h1>
      <form>
        <label>
          Full Name
          <Input 
          name="Insert your full name:"
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
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