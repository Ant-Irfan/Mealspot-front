import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  PayPalScriptProvider,
} from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import history from './history';
import AppContainer from './AppContainer';
import store from './store';

const App = () => (
  <div className="App">
    <PayPalScriptProvider
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_KEY,
      }}
    >
      <Provider store={store}>
        <Router history={history}>
          <AppContainer />
        </Router>
      </Provider>
    </PayPalScriptProvider>
  </div>
);

export default App;
