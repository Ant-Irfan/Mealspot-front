/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { ReactComponent as GoogleLogo } from '../../../images/login/google-logo.svg';
import Logo from '../../../images/Logo-colored.png';
import styles from '../auth.module.scss';
import { BASE_URL } from '../../../utils/constants';

const Register = ({ actions }) => {
  const [emailSelected, setEmailSelected] = useState(false);
  const [isRegisterDisabled, setisRegisterDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
    }
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const onFinishLogin = (values) => {
    console.log('Values', values);
    const { email } = values;
    actions.registerUserEmail(email);
    setisRegisterDisabled(true);
    setTimeLeft(30);
    setTimeout(() => {
      setisRegisterDisabled(false);
    }, 30000);
  };

  const onFinishFailedLogin = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoPlaceholder}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1>Sign Up</h1>
      <div className={styles.loginSubtitle}>
        Mauris velit quam, dignissim vel
        ullamcorper vitae
      </div>
      <Form
        name="Login"
        onFinish={onFinishLogin}
        onFinishFailed={onFinishFailedLogin}
      >
        {
            emailSelected
            && (
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
            )
        }

        <div>
          {
                emailSelected
                  ? (
                    <button
                      type="submit"
                      disabled={isRegisterDisabled}
                      className={`${styles.loginButton} btn btn-light py-2`}
                    >
                      {
                        isRegisterDisabled ? `Retry in: ${timeLeft} sec` : 'Submit'
                      }
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => setEmailSelected(true)}
                      className={`${styles.loginButton} btn btn-light py-2`}
                    >
                      Continue with email
                    </button>
                  )
            }
        </div>
        <div>
          <a href={`${BASE_URL}/ext/login/google`}>
            <button
              type="button"
              className={`${styles.loginGoogleButton} btn btn-light py-2`}
            >
              <GoogleLogo
                style={{ marginRight: 10 }}
              />
              Continue with Google
            </button>
          </a>
        </div>

        <div className={`${styles.loginInputField} text-center`}>
          Already Have An Account
          <span>Log In</span>
        </div>
      </Form>
    </div>
  );
};

const { shape, func } = PropTypes;
Register.propTypes = {
  actions: shape({
    registerUserEmail: func.isRequired,
  }).isRequired,
};

export default Register;
