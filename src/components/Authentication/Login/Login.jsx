/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { ReactComponent as GoogleLogo } from '../../../images/login/google-logo.svg';
import Logo from '../../../images/Logo-colored.png';
import styles from '../auth.module.scss';
import { BASE_URL } from '../../../utils/constants';

const Login = () => {
  const onFinishLogin = (values) => {
    console.log('Values', values);
  };

  const onFinishFailedLogin = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        onFinishFailed={onFinishFailedLogin}
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
              placeholder="Email"
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
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <div className={`${styles.loginInputField} d-flex justify-content-between`}>
          <div>
            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember</Checkbox>
            </Form.Item>
          </div>
          <div className="mt-1">Forgot Password</div>
        </div>

        <div>
          <button
            type="submit"
            className={`${styles.loginButton} btn btn-light py-2`}
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
          <span>Sign up now.</span>
        </div>
      </Form>
    </div>
  );
};

export default Login;
