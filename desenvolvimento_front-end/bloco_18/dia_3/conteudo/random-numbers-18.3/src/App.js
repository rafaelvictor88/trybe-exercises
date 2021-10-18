import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {setRandomNumber(Math.floor(Math.random()*101))}, 10000)
  }, []);

  return (<p>{randomNumber}</p>);
}

export default App;
