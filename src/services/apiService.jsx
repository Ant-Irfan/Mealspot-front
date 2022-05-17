import axios from 'axios';
import uuidv4 from 'react-uuid';
import { BASE_URL } from '../utils/constants';

const defaultOptions = (url) => ({
  timeout: 30000,
  baseURL: `${url}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const defaultFormDataOptions = (url) => ({
  timeout: 30000,
  baseURL: `${url}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const ApiService = axios.create(defaultOptions(BASE_URL));

const getToken = () => `${localStorage.getItem('token')}`;
const getDeviceID = () => (localStorage.getItem('deviceId') ? localStorage.getItem('deviceId') : localStorage.setItem('deviceId', uuidv4()));

export const AuthorizedApiService = axios.create(defaultOptions(BASE_URL));

export const AuthorizedApiFormDataService = axios.create(defaultFormDataOptions(BASE_URL));

AuthorizedApiService.interceptors.request.use(
  (req) => {
    req.headers.Authorization = getToken();
    req.headers['X-DEVICE-ID'] = getDeviceID();
    return req;
  },
);
AuthorizedApiService.interceptors
  .response
  .use(
    (res) => res,
    (err) => err,
  );

AuthorizedApiFormDataService.interceptors.request.use(
  (req) => {
    req.headers.Authorization = getToken();
    req.headers['X-DEVICE-ID'] = getDeviceID();
    return req;
  },
);
AuthorizedApiFormDataService.interceptors
  .response
  .use(
    (res) => res,
    (err) => err,
  );
