import React from 'react';

class EmailInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email:'',
    }
  }

  handleInputEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    return (
      <label htmlFor="input-email">
        Email
        <input 
        type="text"
        name="email"
        value={ this.state.email }
        id="input-email"
        onChange={ this.handleInputEmail }
        maxLength="50"
        required />
      </label>
    )
  }
}

export default EmailInput;
