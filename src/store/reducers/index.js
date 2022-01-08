import {combineReducers} from '@reduxjs/toolkit';
import {reducer as tasksReducer} from './tasks';

export const reducers = combineReducers({
    tasksReducer
});