import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { useLocation } from 'react-router-dom';
import Logo from '../../../images/Logo-colored.png';
import styles from '../auth.module.scss';

const PasswordReset = ({ actions }) => {
  const [isResetTokenAvailable, setisResetTokenAvailable] = useState(false);
  const [resetPasswordToken, setresetPasswordToken] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const token = location.pathname.split('/')[2];
    if (token) {
      setisResetTokenAvailable(true);
      setresetPasswordToken(token);
    }
  }, []);
  const onResetPasswordForm = (values) => {
    const { email } = values;
    actions.sendResetPasswordEmail(email);
  };

  const onResetPasswordWithToken = (values) => {
    const { password } = values;
    actions.resetPasswordWithToken(password, resetPasswordToken);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoPlaceholder}>
        <img
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1>Reset Password</h1>
      <div className={styles.loginSubtitle}>
        Mauris velit quam, dignissim vel
        ullamcorper vitae
      </div>
      {
        !isResetTokenAvailable
      && (
      <Form
        name="resetPassword"
        onFinish={onResetPasswordForm}
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
          <button
            type="submit"
            className={`${styles.loginButton} btn py-2`}
          >
            RESET PASSWORD
          </button>
        </div>
      </Form>
      )
      }

      {
        isResetTokenAvailable
        && (
        <Form
          name="resetPasswordWithToken"
          onFinish={onResetPasswordWithToken}
        >
          <div>
            <div
              className="mb-1"
            >
              Password
            </div>
            <Form.Item
              className="mb-2"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                { min: 6, message: 'Password must be minimum 6 characters.' },
              ]}
            >
              <Input.Password
                className={`${styles.loginInputField} px-3 py-2`}
              />
            </Form.Item>
          </div>

          <div>
            <button
              type="submit"
              className={`${styles.loginButton} btn py-2`}
            >
              RESET PASSWORD
            </button>
          </div>
        </Form>
        )
      }
    </div>
  );
};

const { shape, func } = PropTypes;
PasswordReset.propTypes = {
  actions: shape({
    registerUserEmail: func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default PasswordReset;
