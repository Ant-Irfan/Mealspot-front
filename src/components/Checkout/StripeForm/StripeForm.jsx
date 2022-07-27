/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  LoadingOutlined,
} from '@ant-design/icons';
import {
  Spin,
  notification,
} from 'antd';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      notification.error({
        message: 'Payment not loaded yet!',
      });
      return;
    }
    setloading(true);
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/checkout-success',
      },
    });
    console.log(result);
    if (result.error) {
      setloading(false);
      notification.error({
        message: 'Payment failed',
        description: result.error.message,
      });
      return;
    }
    setloading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      {
            loading
                && (
                <Spin
                  style={{
                    marginTop:'50px',
                    height: '100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                  }}
                  indicator={(
                    <LoadingOutlined
                      style={{
                        fontSize: 66,
                        color: '#56A2BE',
                      }}
                      spin
                    />
            )}
                />
                )
            }
      <div
        style={loading ? { display: 'none' } : { display: 'block' }}
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
      </div>
    </form>
  );
};

export default StripeForm;
