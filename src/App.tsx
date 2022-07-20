import './App.css';
import Todo from './models/todo';
import Todos from './components/Todos';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn React')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
