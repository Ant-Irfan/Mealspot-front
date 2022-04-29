/* eslint-disable no-console */
/* import {
  REGISTER_USER,
} from './types'; */
import axios from 'axios';
import { /* ApiService */ } from '../../../services/apiService';

export const registerUserEmail = (email) => async (/* dispatch, getState */) => {
  axios.post(`https://94.237.103.100.nip.io/api/user/register/resend-email/${email}`, null, {
    params : {
      email,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => ({
      data: null,
      error: console.log(err),
    }));
};

export const registrationEmailConfirmation = (token) => async (/* dispatch, getState */) => {
  console.log('token', token);
  axios.post(`https://94.237.103.100.nip.io/api/user/register/confirm-token/${token}`, null, {
    params : {
      token,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => ({
      data: null,
      error: console.log(err),
    }));
};
