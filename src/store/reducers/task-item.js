import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'task-item',
    initialState: {
        someInitialState: ''
    },
    reducers: {
        taskItem: (state, payload) => {
            state.someInitialState = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(props);