import './App.css';
import TodoModel from './models/todo-model';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText);

    setTodos((currTodos) => currTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((currTodos) => currTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
