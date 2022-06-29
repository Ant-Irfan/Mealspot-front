/* eslint-disable camelcase */
import axios from 'axios';
import { notification } from 'antd';
import history from '../../../history';
import {
  SET_WIZZARD_INITIAL_VALUES,
  SET_WIZZARD_ENABLED,
  SET_CURRENT_USER,
} from './types';
import { ApiService, AuthorizedApiService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';
import { BASE_URL } from '../../../utils/constants';

const setWizzardInitialFormValues = (wizzardValues) => (
  { type: SET_WIZZARD_INITIAL_VALUES, wizzardValues }
);
const setWizzardEnabled = (isEnabled) => (
  { type: SET_WIZZARD_ENABLED, isEnabled }
);
const setCurrentUser = (user) => (
  { type: SET_CURRENT_USER, user }
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
        const { user_type } = data.user;
        if (user_type === 'admin') {
          localStorage.setItem('adminToken', token);
          localStorage.setItem('token', token);
          history.push('/admin/exercises');
          notification.success({
            message: 'Admin Logged In!',
          });
        } else {
          localStorage.setItem('token', token);
          localStorage.setItem('userToken', token);
          history.push('/profile');
          notification.success({
            message: 'Logged In!',
          });
        }
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

export const getCurrentActiveUser = () => async (dispatch) => {
  AuthorizedApiService.get('api/user/whoami')
    .then((res) => {
      const { data, success } = res.data;
      if (data && success) {
        dispatch(setCurrentUser(data));
      } else {
        notification.error({
          message: 'Invalid Current User Fetch!',
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

export const changePassword = (old_password, new_password) => async (/* dispatch */) => {
  const postData = {
    old_password,
    new_password,
  };
  AuthorizedApiService.patch('api/user/change-password', postData)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
      const { data, success } = res.data;
      if (data && success) {
        notification.success({
          message: 'Password Change Success!',
        });
      } else {
        notification.error({
          message: 'Password Change Error!',
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

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('userToken');
  localStorage.removeItem('token');
  dispatch(setCurrentUser(null));
  history.push('/login');
  notification.success({
    message: 'Logout success!',
  });
};
