import { takeLatest } from 'redux-saga/effects';
import { authSaga, registerSaga } from './auth';

import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, authSaga);
}
