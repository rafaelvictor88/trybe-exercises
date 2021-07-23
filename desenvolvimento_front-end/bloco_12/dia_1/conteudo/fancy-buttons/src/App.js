import React from 'react';
import './App.css';

// function handleClickP() {
//   console.log('Clicou no primeiro botão!')
// }
// function handleClickS() {
//   console.log('Clicou no segundo botão!')
// }
// function handleClickT() {
//   console.log('Clicou no terceiro botão!')
// }
class App extends React.Component {
  constructor() {
    super()

    this.handleClickP = this.handleClickP.bind(this)
    this.handleClickS = this.handleClickS.bind(this)
    this.handleClickT = this.handleClickT.bind(this)
  }
  handleClickP() {
    console.log('Clicou no primeiro botão!')
  }
  handleClickS() {
    console.log('Clicou no segundo botão!')
  }
  handleClickT() {
    console.log('Clicou no terceiro botão!')
  }
  render() {
    return (
    <div>
      <button onClick={this.handleClickP}>Meu primeiro botão</button>
      <button onClick={this.handleClickS}>Meu segundo botão</button>
      <button onClick={this.handleClickT}>Meu terceiro botão</button>
    </div>
    )
  }
}

export default App;
