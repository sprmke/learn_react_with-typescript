import React, { useState } from 'react';
import TodoModel from '../models/todo-model';

interface TodosContextInterface {
  items: TodoModel[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const TodosContext = React.createContext<TodosContextInterface>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText);

    setTodos((currTodos) => currTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((currTodos) => currTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextInterface = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
