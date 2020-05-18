// @flow
import { UserState } from '../../types/user';
import * as types from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: UserState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.SIGNIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case types.SIGNIN_REQUEST_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
