import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import createSagaMiddleware from 'redux-saga';
import { reducer } from '../reducers';
import rootSaga from '../sagas';

export const configureStore = context => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};
export const wrapper = createWrapper(configureStore);
