import React, { useContext, useState, useEffect } from 'react';
import TodosContext from '../context';
import Form from './Form';

import './TodoList.css';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [updating, setUpdating] = useState(false);
  const numberCompleted = state.todos.filter(todo => todo.complete).length;

  const toggleUpdate = () => {
    setUpdating(!updating);
  };
  useEffect(() => {
    toggleUpdate();
  }, []);

  return (
    <div className='container'>
      {state.todos.length - numberCompleted > 1 && (
        <h1>{`${state.todos.length - numberCompleted} items todo`}</h1>
      )}
      {state.todos.length - numberCompleted === 1 && <h1>1 item todo</h1>}
      {state.todos.length - numberCompleted === 0 && <h1>All done!</h1>}
      <Form />
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              className={todo.complete && 'strikeout'}
              onDoubleClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo })
              }
            >
              {todo.text}
            </span>
            <button
              type='button'
              onClick={() =>
                dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
              }
            >
              <img src='https://icon.now.sh/edit/000000' alt='edit icon' />
            </button>
            <button
              type='button'
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
            >
              <img src='https://icon.now.sh/delete/000000' alt='delete icon' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
