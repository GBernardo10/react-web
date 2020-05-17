import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const registerUser = request => {
  return api.post('users', request);
};

export const authUser = request => {
  return api.post('auth', request);
};
