import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'go to school', complete: false },
    { id: 2, text: 'get stuff', complete: true },
    { id: 3, text: 'go to store', complete: true }
  ]
});

export { TodosContext as default };
