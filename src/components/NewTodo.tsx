import { useRef } from 'react';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' name='text' id='text' ref={textInputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
