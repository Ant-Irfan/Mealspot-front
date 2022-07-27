import React from 'react';
import styles from './checkoutSuccess.module.scss';
import { ReactComponent as CheckoutSuccessImage } from '../../../images/checkout/checkout-success.svg';
import { ReactComponent as Mealspot } from '../../../images/checkout/mealspot.svg';

const CheckoutSuccess = () => (
  <div
    className="d-flex vh-100 flex-column align-items-center justify-content-around container"
  >
    <Mealspot />
    <div
      className={styles.imageContainer}
    >
      <CheckoutSuccessImage />
      <div>
        <div className={styles.checkoutSuccessHeading}>You are successfully buy a plan</div>
        <div className={styles.checkoutSuccessDescription}>
          You will receivce link in you mail inbox.
          If you cannot find,
          please check your spam folder.
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutSuccess;
