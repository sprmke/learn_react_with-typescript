import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.list}>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
