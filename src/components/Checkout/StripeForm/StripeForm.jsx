/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,

    });
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      <PaymentElement />
      <button
        type="submit"
        style={{
          width: '100%', maxWidth: '100%', marginTop: 5, padding:'10px 0px',
        }}
        className="primary-color-button btn btn-light"
      >
        Submit
      </button>
    </form>
  );
};

export default StripeForm;
