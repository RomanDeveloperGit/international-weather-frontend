/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const configuredStore = () => {
  const middlewares: Middleware[] = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
    });

    middlewares.push(logger);
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

const store = configuredStore();

export default store;
