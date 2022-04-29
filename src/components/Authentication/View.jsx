/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AuthSlider from './AuthSlider/AuthSlider';
import Login from './Login/Login';
import Register from './Register/Register';
import styles from './auth.module.scss';

const Authentication = (props) => {
  const { actions } = props;
  const [isLogin, setisLogin] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      setisLogin(true);
    } else { setisLogin(false); }
  }, [location]);

  return (
    <div className={styles.authContainer}>
      <div className="row">
        <div
          style={{ padding: 0 }}
          className="col-lg-6 col-md-6 col-xs-12"
        >
          <AuthSlider />
        </div>
        <div className={`${styles.loginFormMobileView} col-lg-6 col-md-6 col-xs-12`}>
          {
            isLogin
              ? <Login />
              : (
                <Register
                  actions={actions}
                />
              )
          }
        </div>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
Authentication.propTypes = {
  actions: shape({
    registerUserEmail: func.isRequired,
  }).isRequired,
};

export default Authentication;
