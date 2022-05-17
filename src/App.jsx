/* eslint-disable arrow-body-style */
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import AppContainer from './AppContainer';
import store from './store';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <AppContainer />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
