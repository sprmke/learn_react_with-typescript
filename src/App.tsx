import './App.css';
import TodoModel from './models/todo-model';
import Todos from './components/Todos';

function App() {
  const todos = [new TodoModel('Learn React'), new TodoModel('Learn React')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
