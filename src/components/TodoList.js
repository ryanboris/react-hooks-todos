import React, { useContext } from 'react';
import TodosContext from '../context';

import './TodoList.css';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const numberCompleted = state.todos.filter(todo => todo.complete).length;
  return (
    <>
      {state.todos.length - numberCompleted > 1 && (
        <h1>{`${state.todos.length - numberCompleted} items todo`}</h1>
      )}
      {state.todos.length - numberCompleted === 1 && <h1>1 item todo</h1>}
      {state.todos.length - numberCompleted === 0 && <h1>All done!</h1>}
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
            <button type='button'>
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
    </>
  );
}
