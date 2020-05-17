// @flow
import { User } from '../../components/types/user';
import * as types from './index';

export const registerUserAction = (user: User) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = ({ username, password }: User) => {
  return {
    type: types.LOGIN_USER,
    username,
    password,
  };
};
