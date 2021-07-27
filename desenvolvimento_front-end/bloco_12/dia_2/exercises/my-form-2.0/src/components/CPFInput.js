import React from 'react';

class CPFInput extends React.Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
    }
  }

  handleCPFInput = (event) => {
    this.setState({
      cpf: event.target.value,
    })
  }

  render() {
    return(
      <label htmlFor="input-cpf">
        CPF
        <input
        type="text" 
        name="cpf" 
        id="input-cpf" 
        value={ this.state.cpf } 
        onChange={ this.handleCPFInput } 
        maxLength="11" 
        required />
      </label>
    )
  }
}

export default CPFInput;
