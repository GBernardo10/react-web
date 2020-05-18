// @flow
import * as types from './types';
import { User } from '../../types/user';

export const registerUserRequest = () => {
  return {
    type: types.REGISTER_USER_REQUEST,
  };
};

export const registerUserRequestSucces = (data: User) => {
  return {
    type: types.REGISTER_USER_REQUEST_SUCCESS,
    data,
  };
};

export const registerUserRequestError = () => {
  return {
    type: types.REGISTER_USER_REQUEST_ERROR,
  };
};
