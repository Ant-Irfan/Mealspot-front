/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  LoadingOutlined,
} from '@ant-design/icons';
import {
  Spin,
  notification,
} from 'antd';
import {
  PayPalButtons,
} from '@paypal/react-paypal-js';

const PaypalLifetime = (props) => {
  const { prices, plan, history } = props;
  const [loading, setloading] = useState(false);
  const createOrder = (data, actions) => {
    setloading(true);
    return actions.order.create({
      purchase_units: [
        {
          description: 'Gym App',
          amount: {
            currency_code: 'USD',
            value: prices.lifetime.slice(1),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => actions.order.capture().then((details) => {
    setloading(false);
    history.push('checkout-success');
    notification.success({
      message: 'Payment Success!',
    });
  });

  const onCancel = (err) => {
    setloading(false);
    notification.error({
      message: 'Payment failed',
    });
  };

  const onError = (err) => {
    setloading(false);
    notification.error({
      message: 'Payment failed',
    });
  };

  return (
    <div>
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
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
          onError={onError}
        />
      </div>
    </div>
  );
};

export default withRouter(PaypalLifetime);
