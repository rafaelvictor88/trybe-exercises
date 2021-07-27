import React from 'react';
import './App.css';
import CPFInput from './components/CPFInput';
import EmailInput from './components/EmailInput';
import NameInput from './components/NameInput';

class App extends React.Component {
  render () {
    return (
      <fieldset>
        <NameInput />
        <EmailInput />
        <CPFInput />
      </fieldset>
    )
  }
}

export default App;
