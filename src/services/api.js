import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const registerUser = request => {
  return api
    .post('users', request)
    .then(res => {
      request.status = res.status;
    })
    .catch(err => {
      request.err = err.message;
      request.status = err.response.status || 500;
    });
};

export const authUser = request => {
  return api
    .post('users/auth', request)
    .then(res => {
      request.status = res.status;
    })
    .catch(err => {
      request.err = err.message;
      request.status = err.response.status || 500;
    });
};
