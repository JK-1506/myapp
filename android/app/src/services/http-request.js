import axios from 'axios';
import {getUserInfo} from '../storage';

const createAxiosInstance = async () => {
  const {accessToken} = await getUserInfo();
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.2.43:27017/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    config => {
      // Add authorization header
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(response => {
    return response;
  });
  return axiosInstance;
};

const _get = url => {
  return new Promise((resolve, reject) => {
    createAxiosInstance()
      .then(axiosInstance => {
        axiosInstance
          .get(url)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            const errResponse =
              (error && error.response && error.response.data) ||
              (error && error.message);
            reject(errResponse);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    createAxiosInstance()
      .then(axiosInstance => {
        axiosInstance
          .post(url, data)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            const errResponse =
              (error && error.response && error.response.data) ||
              (error && error.message);
            reject(errResponse);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _put = (url, data) => {
  return new Promise((resolve, reject) => {
    createAxiosInstance()
      .then(axiosInstance => {
        axiosInstance
          .put(url, data)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            const errResponse =
              (error && error.response && error.response.data) ||
              (error && error.message);
            reject(errResponse);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _delete = url => {
  return new Promise((resolve, reject) => {
    createAxiosInstance()
      .then(axiosInstance => {
        axiosInstance
          .delete(url)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            const errResponse =
              (error && error.response && error.response.data) ||
              (error && error.message);
            reject(errResponse);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const http = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};
