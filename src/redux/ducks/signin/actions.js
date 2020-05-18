// @flow
import * as types from './types';
import { User } from '../../types/user';

export const signinRequest = () => {
  return {
    type: types.SIGNIN_REQUEST,
  };
};

export const signinRequestSucces = (data: User) => {
  return {
    type: types.SIGNIN_REQUEST_SUCCESS,
    data,
  };
};

export const signinRequestError = () => {
  return {
    type: types.SIGNIN_REQUEST_ERROR,
  };
};
