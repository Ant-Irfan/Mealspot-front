/* eslint-disable camelcase */
import { notification } from 'antd';
import {
  SET_PAYMENT_CONFIG,
  SET_PLAN_TO_BUY,
  SET_PAYMENT_SESSION,
} from './types';
import { AuthorizedApiService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';

const setPaymentConfiguration = (paymentConfig) => (
  { type: SET_PAYMENT_CONFIG, paymentConfig }
);

const setUserPaymentSession = (paymentSession) => (
  { type: SET_PAYMENT_SESSION, paymentSession }
);

export const setPlanToBuy = (plan) => (
  { type: SET_PLAN_TO_BUY, plan }
);

export const getPaymentConfig = () => async (dispatch) => {
  AuthorizedApiService.get('api/payment/config')
    .then((res) => {
      const { success, data } = res.data;
      // eslint-disable-next-line no-console
      console.log(data);
      if (success) {
        dispatch(setPaymentConfiguration(data));
      } else {
        notification.error({
          message: 'Invalid Payment Configuration Fetch!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const startCheckout = (provider, price_id) => async (dispatch) => {
  AuthorizedApiService.post(
    `api/payment/start_payment/${provider}/${price_id}`,
    {
      provider,
      price_id,
    },
  )
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        dispatch(setUserPaymentSession({
          ...data,
          provider,
        }));
      } else {
        notification.error({
          message: 'Invalid Start Of Payment!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};
