import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'go to school', complete: false },
    { id: 2, text: 'get stuff', complete: true },
    { id: 3, text: 'go to store', complete: true },
    { id: 4, text: 'sing', complete: true },
    { id: 5, text: 'eat', complete: true },
    { id: 6, text: 'dance', complete: true }
  ]
});

export { TodosContext as default };
