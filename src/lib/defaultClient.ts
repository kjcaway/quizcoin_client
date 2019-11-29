import axios from 'axios';

function authHeader() {
  // return authorization header with jwt token
  const token = localStorage.getItem('access_token');

  if (token) {
      return { 'Authorization': token };
  } else {
      return {};
  }
}

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
  headers: authHeader()
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