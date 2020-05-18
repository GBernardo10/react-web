import { all, fork, takeLatest } from 'redux-saga/effects';
import { LOAD_EVENTO_REQUEST } from './eventos/types';
import { SIGNIN_REQUEST } from './signin/types';
import { REGISTER_USER_REQUEST } from './signup/types';

import { loadEventoRequest } from './eventos/sagas';
import { signinSaga } from './signin/sagas';
import { registerSaga } from './signup/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(LOAD_EVENTO_REQUEST, loadEventoRequest),
    takeLatest(SIGNIN_REQUEST, signinSaga),
    takeLatest(REGISTER_USER_REQUEST, registerSaga),
  ]);
}
