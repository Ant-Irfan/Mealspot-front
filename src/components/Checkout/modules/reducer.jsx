/* eslint-disable default-param-last */
import {
  SET_PAYMENT_CONFIG,
  SET_PLAN_TO_BUY,
  SET_PAYMENT_SESSION,
} from './types';

const defaultState = {
  paymentConfig: null,
  plan: null,
  paymentSession: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAYMENT_CONFIG:
      return {
        ...state,
        paymentConfig: action.paymentConfig,
      };
    case SET_PLAN_TO_BUY:
      return {
        ...state,
        plan: action.plan,
      };
    case SET_PAYMENT_SESSION:
      return {
        ...state,
        paymentSession: action.paymentSession,
      };
    default:
      return state;
  }
};
