import {createSlice} from '@reduxjs/toolkit';

const filterSlice = {
    name: 'tasks',
    initialState: {
        // someInputStr: 'someInputStr',
        // filterStr: '',
        // comments: null,
        // isShowCommentsWithLike: true
    },
    reducers: {
        filterInputText: (state, payload) => {
            state.someInitialState = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(filterSlice);