import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

import createSagaMiddleware from 'redux-saga';
import { reducer } from '../reducers';
import rootSaga from '../sagas';

export const configureStore = context => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
export const wrapper = createWrapper(configureStore);
