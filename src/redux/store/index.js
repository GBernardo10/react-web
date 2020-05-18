// @flow
import { createStore, applyMiddleware, Store } from 'redux';
import { EventosState } from '../types/eventos';
import { UserState } from '../types/user';
import rootReducer from '../ducks/rootReducer';
import rootSaga from '../ducks/rootSaga';

import createSagaMiddleware from 'redux-saga';

export type ApplicationState = {
  eventos: EventosState,
  user: UserState,
};
const exampleInitialState: ApplicationState = {};

const sagaMiddleware = createSagaMiddleware();

export function initializeStore(
  context = exampleInitialState,
): Store<ApplicationState> {
  const store = createStore(
    rootReducer,
    context,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
