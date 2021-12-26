import {combineReducers} from '@reduxjs/toolkit';
import {reducer as filterInputTextReducer} from './filterInputText';
import {reducer as taskItemReducer} from './task-item';

export const reducers = combineReducers({
    filterInputTextReducer,
    taskItemReducer
});