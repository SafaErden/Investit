import { combineReducers } from 'redux';
import stocks from './stocks';
import filter from './filter';
import filters from './setFilter';

const mainReducer = combineReducers({ filter, stocks, filters });

export default mainReducer;
