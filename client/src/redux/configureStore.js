import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import products from './features/products';
import categories from './features/categories';

const { createLogger } = require('redux-logger/src');

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ products, categories }),
  applyMiddleware(thunk, logger)
);
