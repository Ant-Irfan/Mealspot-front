import axios from 'axios';
// import uuidv4 from 'react-uuid';
import { BASE_URL } from '../utils/constants';

const defaultOptions = (url) => ({
  timeout: 30000,
  baseURL: `${url}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiService = axios.create(defaultOptions(BASE_URL));

const getToken = () => `Bearer ${localStorage.getItem('token')}`;

// WILL BE USED WHEN AUTHORIZED API COMES
// const getDeviceID = () => (localStorage.getItem('deviceId') ? localStorage.getItem('deviceId') : localStorage.setItem('deviceId', uuidv4()));

export const AuthorizedApiService = axios.create(defaultOptions(BASE_URL));

AuthorizedApiService.interceptors.request.use(
  (req) => {
    req.headers.Authorization = getToken();
    return req;
  },
);
AuthorizedApiService.interceptors
  .response
  .use(
    (res) => res,
    (err) => err,
  );
