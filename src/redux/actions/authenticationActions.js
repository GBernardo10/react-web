// @flow
import { User } from '../../components/types/user';
import * as types from './index';

export const registerUserAction = (user: User) => {
  return {
    type: types.REGISTER_USER,
    user,
    status: null,
    err: null,
  };
};

export const loginUserAction = ({ username, password }: User) => {
  const user = { username, password };
  return {
    type: types.LOGIN_USER,
    user,
    status: null,
    err: null,
  };
};
