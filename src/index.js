/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = React.createContext({});

const user = 'test context';

ReactDOM.render(
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
