import axios from 'axios';
import uuidv4 from 'react-uuid';
import { BASE_URL } from '../utils/constants';
import history from '../history';

const defaultOptions = (url) => ({
  timeout: 30000,
  baseURL: `${url}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const ApiService = axios.create(defaultOptions(BASE_URL));

const getToken = () => `Bearer ${localStorage.getItem('token')}`;
const getDeviceID = () => (localStorage.getItem('deviceId') ? localStorage.getItem('deviceId') : localStorage.setItem('deviceId', uuidv4()));

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const handleResponseError = (error, originalRequest) => {
  const refreshToken = () => localStorage.getItem('refresh_token');
  const refreshAccessToken = () => axios.post(`${BASE_URL}auth/refresh-token`, { refreshToken: refreshToken() });
  const updateToken = (data) => {
    localStorage.setItem('refresh_token', data.refreshToken);
    localStorage.setItem('token', data.accessToken);
  };
  const removeTokenAndRedirect = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userSlug');
    history.push('/');
  };

  if (error.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve,
          reject,
        });
      })
        .then(() => {
          originalRequest.headers.Authorization = getToken();
          return axios(originalRequest);
        })
        .catch((err) => err);
    }
    if (originalRequest.headers.Authorization !== getToken()) {
      originalRequest.headers.Authorization = getToken();
      return Promise.resolve(axios(originalRequest));
    }

    originalRequest._retry = true;
    isRefreshing = true;
    return new Promise((resolve, reject) => {
      refreshAccessToken()
        .then(({ data }) => {
          updateToken(data);
          processQueue(null, data.token);
          resolve(axios(originalRequest));
        })
        .catch((err) => {
          processQueue(err, null);
          removeTokenAndRedirect();
          reject(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    });
  }
  return Promise.reject(error);
};

export const AuthorizedApiService = axios.create(defaultOptions(BASE_URL));

AuthorizedApiService.interceptors.request.use(
  (req) => {
    req.headers.Authorization = getToken();
    req.headers.xDeviceID = getDeviceID();
    return req;
  },
);
AuthorizedApiService.interceptors
  .response
  .use(
    (res) => res,
    (err) => handleResponseError(err.response, err.config),
  );

ApiService.interceptors.request.use(
  (req) => {
    req.headers['x-device-id'] = getDeviceID();
    req.headers['user-agent'] = window.navigator.userAgent;
    return req;
  },
);
