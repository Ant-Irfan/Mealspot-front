import axios from 'axios';
import { notification } from 'antd';
import history from '../../../history';
import {
  SET_WIZZARD_INITIAL_VALUES,
  SET_WIZZARD_ENABLED,
} from './types';
import { ApiService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';
import { BASE_URL } from '../../../utils/constants';

const setWizzardInitialFormValues = (wizzardValues) => (
  { type: SET_WIZZARD_INITIAL_VALUES, wizzardValues }
);
const setWizzardEnabled = (isEnabled) => (
  { type: SET_WIZZARD_ENABLED, isEnabled }
);

export const registerUserEmail = (email) => async (/* dispatch, getState */) => {
  axios.post(`${BASE_URL}/api/user/register/resend-email/${email}`, null, {
    params : {
      email,
    },
  })
    .then((res) => {
      const { data, success } = res.data;
      if (data && success) {
        notification.success({
          message: 'Registration Email Sent!',
          description: 'Check Your Mailbox',
        });
      } else {
        notification.error({
          message: 'Registration Email Request Error!',
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

export const registrationEmailConfirmation = (token) => async (dispatch) => {
  axios.post(`${BASE_URL}/api/user/register/confirm-token/${token}`, null, {
    params : {
      token,
    },
  })
    .then((res) => {
      const { data, success } = res.data;
      if (success) {
        sessionStorage.setItem('token', token);
        dispatch(setWizzardEnabled(true));
        dispatch(setWizzardInitialFormValues(data));
      } else {
        notification.error({
          message: 'Invalid token!',
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

export const wizzardUserRegistration = (user) => async (dispatch) => {
  ApiService.post('api/user/register', user)
    .then((res) => {
      const { data, success } = res.data;
      if (success) {
        const { token } = data;
        localStorage.setItem('token', token);
        history.push('/home');
        dispatch(setWizzardEnabled(false));
        dispatch(setWizzardInitialFormValues(null));
        notification.success({
          message: 'Registration completed!',
        });
      } else {
        notification.error({
          message: 'Invalid User Registration!',
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

export const sendResetPasswordEmail = (email) => async (/* dispatch */) => {
  const postData = {
    email,
  };
  ApiService.post('api/user/password-reset', postData)
    .then((res) => {
      const { data, success } = res.data;
      if (data && success) {
        notification.success({
          message: 'Password link reset sent on email!',
        });
      } else {
        notification.error({
          message: 'Invalid Sent Password Link!',
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

export const resetPasswordWithToken = (password, token) => async (/* dispatch */) => {
  const postData = {
    token,
    new_password: password,
  };
  ApiService.post('api/user/password-confirm', postData)
    .then((res) => {
      const { data, success } = res.data;
      if (data && success) {
        notification.success({
          message: 'Password Reset Success!',
        });
      } else {
        notification.error({
          message: 'Password Reset Error!',
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

export const loginUser = (username, password) => async (/* dispatch */) => {
  const postData = {
    username,
    password,
  };
  ApiService.post('api/auth/login', postData)
    .then((res) => {
      const { data, success } = res.data;
      if (success) {
        const { token } = data;
        localStorage.setItem('token', token);
        history.push('/home');
        notification.success({
          message: 'Logged In!',
        });
      } else {
        notification.error({
          message: 'Invalid User Login!',
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
