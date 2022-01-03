import {combineReducers} from '@reduxjs/toolkit';
// import {reducer as task} from './filterInputText';
import {reducer as taskListReducer} from './tasksList';

export const reducers = combineReducers({
    taskListReducer
});