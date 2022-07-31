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

const PayPalSubscription = (props) => {
  const {
    prices, plan, history, paymentSession,
  } = props;
  const [loading, setloading] = useState(false);
  const createSubscription = (data, actions) => {
    setloading(prices);
    return actions.subscription.create({
      plan_id: paymentSession.price_id,
    });
  };

  const onApprove = (data, actions) => {
    setloading(false);
    history.push('checkout-success');
    notification.success({
      message: 'Payment Success!',

    });
  };

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
          createSubscription={createSubscription}
          onCancel={onCancel}
          onError={onError}
          onApprove={onApprove}
          style={{ label: 'subscribe' }}
        />
      </div>

    </div>
  );
};

export default withRouter(PayPalSubscription);
