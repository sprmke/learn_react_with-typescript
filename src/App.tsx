import './App.css';
import TodoModel from './models/todo-model';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {
  const todos = [new TodoModel('Learn React'), new TodoModel('Learn React')];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
