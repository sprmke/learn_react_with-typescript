import React from 'react';
import TodoModel from '../models/todo-model';
import Todo from './Todo';

import classes from './Todos.module.css';

const Todos: React.FC<{
  items: TodoModel[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  const removeTodoHandler = (todoId: string) => {
    props.onRemoveTodo(todoId);
  };

  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodoHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
