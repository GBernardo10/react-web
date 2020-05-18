import { put, call } from 'redux-saga/effects';
import { authUser, registerUser } from '../../../services/api';
import * as types from '../../actions';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUser, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* authSaga(payload) {
  try {
    const response = yield call(authUser, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
