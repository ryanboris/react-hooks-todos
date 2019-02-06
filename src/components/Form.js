import React, { useState, useContext } from 'react';
import TodosContext from '../context';

export default function Form() {
  const [todo, setTodo] = useState('');
  const { dispatch } = useContext(TodosContext);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter a task'
        onChange={handleChange}
        value={todo}
      />
      <button type='submit' value='submit' />
    </form>
  );
}
