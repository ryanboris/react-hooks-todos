/* eslint-disable import/prefer-default-export */
import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import Form from './components/Form';

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <Form />
    </TodosContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
