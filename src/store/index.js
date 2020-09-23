import { combineReducers, createStore } from 'redux';
import { cacheReducer } from './cache';

const rootReducer = combineReducers(
  { cache: cacheReducer },
);

export default createStore(rootReducer);
