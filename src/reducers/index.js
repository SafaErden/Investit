  
import { combineReducers } from 'redux';
import stocks from './stocks';
import filter from './filter';

const mainReducer = combineReducers({ filter, stocks });

export default mainReducer;