import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import AppContainer from './AppContainer';

const App = () => (
  <div className="App">
    <Router history={history}>
      <AppContainer />
    </Router>
  </div>
);

export default App;
