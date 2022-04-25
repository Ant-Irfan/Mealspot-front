import React from 'react';
import RegisterConfirmation from '../../../images/login/register-confirm.png';
import Logo from '../../../images/Logo-colored.png';
import styles from '../auth.module.scss';

const RegisterConfirmed = () => (
  <div style={{ padding: '0px  20px' }}>
    <div
      className={`${styles.registerConfirmContainer} d-flex justify-content-center `}
    >
      <div className="d-flex flex-column">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '30%' }}
        >
          <img
            src={Logo}
            alt="Logo"
          />
        </div>
        <div
          className="d-flex flex-column  align-items-center"
          style={{ height: '70%' }}
        >
          <img
            src={RegisterConfirmation}
            alt="register confirmation"
            className="mb-5"
          />
          <h1 className={styles.registerConfirmTitle}>
            You are successfully create an Account
          </h1>
          <div className={styles.registerConfirmDescription}>
            You will receivce link in you mail inbox. If you cannot find,
            please check your spam folder.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterConfirmed;
