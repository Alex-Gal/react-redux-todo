import { createSlice } from "@reduxjs/toolkit";

const props = {
    name: 'filter',
    initialState: 0,
    reducers: {
        filter: (state) => {
            return state + 1;
        }
    }
}


export const {actions, reducer} = createSlice(props);