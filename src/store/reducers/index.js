import {combineReducers} from '@reduxjs/toolkit';
import {reducer as filterReducer} from './filter';

export const reducers = combineReducers({
    filterReducer
});