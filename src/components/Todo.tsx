import React from 'react';

const Todo: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default Todo;
