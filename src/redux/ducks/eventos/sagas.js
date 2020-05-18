import { put, call } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { loadEventoSucces, loadEventoError } from './actions';

export function* loadEventoRequest() {
  try {
    const response = yield call(api.get, 'users/diego3g/repos');
    yield put(loadEventoSucces(response.data));
  } catch (error) {
    yield put(loadEventoError());
  }
}
