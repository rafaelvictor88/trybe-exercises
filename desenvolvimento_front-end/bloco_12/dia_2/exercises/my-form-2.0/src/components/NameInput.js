import React from 'react';

class NameInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  handleInputName = (event) => {
    this.setState({
      name: event.target.value.toUpperCase(),
    })
  }

  render() {
    return(
      <label htmlFor="input-name">
        Name
        <input
        type="text"
        name="name"
        value={ this.state.name }
        id="input-name"
        onChange={ this.handleInputName }
        maxLength="40"
        required />
      </label>
    )
  }
}

export default NameInput;
