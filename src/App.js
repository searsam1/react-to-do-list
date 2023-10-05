import './App.css';
import List from "./components/List"

function App() {
  
  const tasks = ["Task 1. . .", "Task 2. . ."]
  
  return (
    <div className="App">
      <h1><center>Tasks</center></h1>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
