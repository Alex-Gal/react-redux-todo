import {combineReducers} from '@reduxjs/toolkit';
import {reducer as tasksReducer} from './tasks';
import {reducer as filterReducer} from './filters';

export const reducers = combineReducers({
    tasksReducer,
    filterReducer
});