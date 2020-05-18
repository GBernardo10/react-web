// @flow
import * as types from './types';
import { Evento } from '../../types/eventos';

export const loadEventoRequest = () => {
  return {
    type: types.LOAD_EVENTO_REQUEST,
  };
};

export const loadEventoSucces = (data: Evento[]) => {
  return {
    type: types.LOAD_EVENTO_REQUEST_SUCCESS,
    data,
  };
};
export const loadEventoError = () => {
  return {
    type: types.LOAD_EVENTO_REQUEST_ERROR,
  };
};
