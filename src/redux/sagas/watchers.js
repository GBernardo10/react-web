import { takeEvery } from 'redux-saga/effects';
import { authSaga, registerSaga } from './auth';

import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeEvery(types.REGISTER_USER, registerSaga);
  yield takeEvery(types.LOGIN_USER, authSaga);
}
