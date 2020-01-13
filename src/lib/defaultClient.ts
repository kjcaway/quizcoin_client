import axios from 'axios';

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001/'
  } else if (process.env.NODE_ENV === 'production') {
    return 'http://ec2-13-125-33-180.ap-northeast-2.compute.amazonaws.com:8080'
  } else {
    return '/'
  }
})();

const defaultClient = axios.create({
  baseURL,
})

defaultClient.defaults.timeout = 3000;

defaultClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = token;
  } 
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