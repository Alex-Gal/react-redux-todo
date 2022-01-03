import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers';
// import {reducer} from './reducers/filterInputText';

export const store = configureStore({
    reducer: reducers
});