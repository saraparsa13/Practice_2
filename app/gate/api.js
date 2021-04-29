import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import tokenHelper from 'helpers/token';
import { API_URL } from 'helpers/constants';

const client = axios.create({ baseURL: API_URL, json: true });

client.interceptors.request.use(
  async config => {
    const token = await tokenHelper.get()
    if (token !== '') {
      headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

// client.interceptors.response.use(
//   (response) => {
//     // if (response.data.status === 'SUCCESS') {
//     //   console.log(response.data.message)
//     // }
//     // if (response.data.status === 'FAIL') {
//     //   alert(response.data.message)
//     // }
//     // console.log(response)
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

const call = async (method, url, data = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  
  const request = { headers, method, url };

  if (!isEmpty(data)) {
    if (method !== 'get') {
      request.data = data;
    } else {
      request.params = data;
    }
  }

  try {
    const response = await client(request);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const auth = {
  async signOut(url) {
    const token = await tokenHelper.get();

    token.clear();
    call('post', url);
  },
};

export default {
  ...auth,

  delete: (url, data = {}) => call('delete', url, data),
  get: (url, data = {}) => call('get', url, data),
  patch: (url, data = {}) => call('patch', url, data),
  post: (url, data = {}) => call('post', url, data),
  put: (url, data = {}) => call('put', url, data),
};
