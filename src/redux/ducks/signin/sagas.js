import { put, call } from 'redux-saga/effects';
import { authUser } from '../../../services/api';
import { signinRequestSucces, signinRequestError } from './actions';

export function* signinSaga(payload) {
  try {
    const response = yield call(authUser, payload);
    yield put(signinRequestSucces(response));
  } catch (error) {
    yield put(signinRequestError());
  }
}
