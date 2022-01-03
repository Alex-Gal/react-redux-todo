import {createSlice} from '@reduxjs/toolkit';

const props = {
    name: 'tasksList',
    initialState: {
        someInputStr: 'someInputStr someInputStr',
        filterStr: '',
        comments: null,
        isShowCommentsWithLike: true
    },
    reducers: {
        filterInputText: (state, payload) => {
            state.someInitialState = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(props);