import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
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

// export const loadEvento = () => api.get();
