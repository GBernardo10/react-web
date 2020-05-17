import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

export default function* root() {
  yield fork(watchUserAuthentication);
}
