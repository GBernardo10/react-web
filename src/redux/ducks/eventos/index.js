// @flow
import { EventosState } from '../../types/eventos';
import * as types from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: EventosState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<EventosState> = (state = INITIAL_STATE, action) => {
  const { data } = action;

  switch (action.type) {
    case types.LOAD_EVENTO_REQUEST:
      return { ...state, loading: true, error: false };
    case types.LOAD_EVENTO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data,
      };

    case types.LOAD_EVENTO_REQUEST_ERROR:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
