import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { render, cleanup as originalCleanUp } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { all } from 'redux-saga/effects';
import combineWatchers from '../utils/combine-watchers';
import createActionWatcher from '../utils/create-action-watcher';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export const cleanup = originalCleanUp;

class StoreUtil {
  actions = [];

  clearActions = () => {
    this.actions = [];
  };

  pushAction = action => {
    this.actions.push(action);
  };

  getActions = () => {
    return this.actions;
  };

  getAction = action => {
    return new Promise(resolve => {
      let actionFound;
      while (!actionFound) {
        actionFound = this.actions.find(({ type }) => type === action);
      }
      resolve(actionFound);
    });
  };
}

const loggerMiddleware = storeUtil => store => next => action => {
  storeUtil.pushAction(action);
  next(action);
};

export const renderWithState = (Component, props = {}) => {
  const storeUtil = new StoreUtil();
  storeUtil.clearActions();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware(storeUtil), sagaMiddleware)
  );
  sagaMiddleware.run(function* fullSaga() {
    const rootWatcher = combineWatchers(rootSaga);
    const watchers = Object.keys(rootWatcher).map(type =>
      createActionWatcher(type, rootWatcher[type])
    );
    yield all(watchers);
  });
  const renderedOptions = render(
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
  return { ...renderedOptions, storeUtil };
};
