import './App.css';

const myTasks = ['Estudar', 'Lavar Louça', 'Pendurar']

const Task = () => {
  return (
    myTasks.map((task) => <li>{task}</li>)
  );
}

function App() {
  return (
    <ol>{Task()}</ol>
  );
}

export default App;
