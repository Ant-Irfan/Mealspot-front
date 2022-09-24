import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactComponent as GoogleLogo } from '../../../images/login/google-logo.svg';
import Logo from '../../../images/Logo-colored.png';
import styles from '../auth.module.scss';
import { BASE_URL } from '../../../utils/constants';
import { resetPasswordRoute, registerRoute } from '../../../utils/pathsHelper';

const Login = ({ actions }) => {
  const onFinishLogin = (values) => {
    const { email, password } = values;
    actions.loginUser(email, password);
  };

  const leadToGoogleRegistration = () => {
    window.location.href = `${BASE_URL}/ext/login/google`;
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoPlaceholder}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1>Log In</h1>
      <div className={styles.loginSubtitle}>
        Mauris velit quam, dignissim vel
        ullamcorper vitae
      </div>
      <Form
        name="Login"
        onFinish={onFinishLogin}
      >
        <div>
          <div
            className="mb-1"
          >
            Email Address
          </div>
          <Form.Item
            className="mb-2"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please input valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },

            ]}
          >
            <Input
              className={`${styles.loginInputField} px-3 py-2`}
            />
          </Form.Item>
        </div>

        <div>
          <div
            className="mb-1"
          >
            Password
          </div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              className={`${styles.loginInputField} px-3 py-2`}
            />
          </Form.Item>
        </div>
        <div className={`${styles.loginInputField} d-flex justify-content-between`}>
          <div>
            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>
                Remember
              </Checkbox>
            </Form.Item>
          </div>
          <NavLink
            to={resetPasswordRoute}
            style={{ alignItems:'start' }}
          >
            <div className="mt-1">Forgot Password</div>
          </NavLink>
        </div>

        <div>
          <button
            type="submit"
            className={`${styles.loginButton} btn py-2`}
          >
            LOG IN
          </button>
        </div>
        <div>
          <button
            onClick={leadToGoogleRegistration}
            type="button"
            className={`${styles.loginGoogleButton} btn btn-light py-2`}
          >
            <GoogleLogo
              style={{ marginRight: 10 }}
            />
            Login with google
          </button>
        </div>

        <div className={`${styles.loginInputField} text-center`}>
          Don´t have an Account?
          <NavLink
            to={registerRoute}
            style={{ display:'inline' }}
          >
            <span className={styles.signUpNow}>Sign up now.</span>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

const { shape, func } = PropTypes;
Login.propTypes = {
  actions: shape({
    loginUser: func.isRequired,
  }).isRequired,
};

export default Login;
