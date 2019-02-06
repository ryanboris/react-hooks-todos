import uuidv4 from 'uuid/v4';

export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t => {
        if (t.id === action.payload.id) {
          return { ...action.payload, complete: !action.payload.complete };
        }
        return t;
      });
      return {
        ...state,
        todos: toggledTodos
      };

    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos
      };

    case 'ADD_TODO':
      const buildTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      return {
        ...state,
        todos: [...state.todos, buildTodo]
      };

    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload
      };

    case 'UPDATE_TODO':
      const updatedTodo = { ...state.currentTodo, text: action.payload };
      const index = state.todos.findIndex(
        todo => todo.id === state.currentTodo.id
      );
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          updatedTodo,
          ...state.todos.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}
