import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersListSmart } from './components/users-list-smart/Users-list-smart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export function App() {
  return (
    <Router>
      <Route path={['/:id', '/']}>
        <UsersListSmart></UsersListSmart>;
      </Route>
    </Router>
  );
}

export default App;
