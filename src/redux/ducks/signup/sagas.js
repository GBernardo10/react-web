import { put, call } from 'redux-saga/effects';
import { registerUser } from '../../../services/api';
import { registerUserRequestSucces, registerUserRequestError } from './actions';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUser, payload);
    yield put(registerUserRequestSucces(response));
  } catch (error) {
    yield put(registerUserRequestError());
  }
}
