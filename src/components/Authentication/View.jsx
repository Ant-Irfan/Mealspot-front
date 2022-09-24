import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthSlider from './AuthSlider/AuthSlider';
import Login from './Login/Login';
import Register from './Register/Register';
import PasswordReset from './PasswordReset/PasswordReset';
import styles from './auth.module.scss';

const Authentication = ({ actions }) => (
  <div className={styles.authContainer}>
    <div className="row">
      <div
        style={{ padding: 0 }}
        className="col-lg-5 col-md-6 col-xs-12"
      >
        <AuthSlider />
      </div>
      <div className={`${styles.loginFormMobileView} col-lg-7 col-md-6 col-xs-12`}>
        <Switch>
          <Route
            path="/login"
            exact
            render={() => (
              <Login
                key={window.location.pathname}
                actions={actions}
              />
            )}
          />
          <Route
            path="/register"
            exact
            render={() => (
              <Register
                key={window.location.pathname}
                actions={actions}
              />
            )}
          />
          <Route
            path="/reset-password"
            exact
            render={() => (
              <PasswordReset
                key={window.location.pathname}
                actions={actions}
              />
            )}
          />
          <Route
            path="/reset-password/:token"
            exact
            render={() => (
              <PasswordReset
                key={window.location.pathname}
                actions={actions}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  </div>
);

const { shape, func } = PropTypes;
Authentication.propTypes = {
  actions: shape({
    registerUserEmail: func.isRequired,
  }).isRequired,
};

export default Authentication;
