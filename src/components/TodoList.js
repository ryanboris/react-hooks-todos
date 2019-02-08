import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import Form from './Form';
import TodosContext from '../context';

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
    <>
      {state.todos.length - numberCompleted > 1 && (
        <h1>{`${state.todos.length - numberCompleted} items todo`}</h1>
      )}
      {state.todos.length - numberCompleted === 1 && <h1>1 item todo</h1>}
      {state.todos.length - numberCompleted === 0 && <h1>All done!</h1>}

      <Form />

      <ul style={{ listStyleType: 'none' }}>
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

            <Button
              variant='contained'
              color='primary'
              type='button'
              onClick={() =>
                dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
              }
            />
            <img src='https://icon.now.sh/edit/000000' alt='edit icon' />

            <button
              type='button'
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
            >
              <img src='https://icon.now.sh/delete/000000' alt='delete icon' />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
