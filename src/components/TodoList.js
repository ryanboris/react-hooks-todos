import React, { useContext } from 'react';
import TodosContext from '../context';

import TodoStyles from './TodoStyles';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0
      ? `${state.todos.length -
          state.todos.filter(todo => todo.complete === true)
            .length}  things to do`
      : 'Nothing to do!';

  return (
    <TodoStyles className='container mx-auto max-w-md text-center font-mono'>
      <h1 className='text-bold'>{title}</h1>
      <ul className='list-reset text-white p-0'>
        {state.todos.map(todo => (
          <li
            key={todo.id}
            className='flex items-center bg-pink-lighter border-black border-dotted border-2 my-2 py-4'
          >
            <span
              className={`cursor-pointer flex-1 ml-12 ${todo.complete &&
                'line-through text-grey-darkest'}`}
              onDoubleClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo })
              }
            >
              {todo.text}
            </span>
            <button type='button'>
              <img
                src='https://icon.now.sh/edit/ffffff'
                alt='edit icon'
                className='h-10 p-1'
              />
            </button>
            <button type='button'>
              <img
                src='https://icon.now.sh/delete/000000'
                alt='delete icon'
                className='h-8 mx-2'
              />
            </button>
          </li>
        ))}
      </ul>
    </TodoStyles>
  );
}
