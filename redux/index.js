import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./actions/reducers";

const sagaMiddleware = createSagaMiddleware();

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
};
