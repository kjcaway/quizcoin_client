import axios from 'axios';

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001/'
  } else if (process.env.NODE_ENV === 'production') {
    return '/'
  } else {
    return '/'
  }
})();

const defaultClient = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
  
})

defaultClient.defaults.timeout = 3000;

defaultClient.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error);
});

defaultClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default defaultClient;