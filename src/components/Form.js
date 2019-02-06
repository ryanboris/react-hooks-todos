import React, { useState, useContext, useEffect } from 'react';
import TodosContext from '../context';

export default function Form() {
  const [todo, setTodo] = useState('');
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    }
  }, [currentTodo.id]);

  const handleSubmit = event => {
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo });
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo });
    }
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
