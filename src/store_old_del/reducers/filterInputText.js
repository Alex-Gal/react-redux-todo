import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'filterInputText',
    initialState: '',
    reducers: {
        filterInputText: (state, payload) => {
            state.someInitialState = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(props);