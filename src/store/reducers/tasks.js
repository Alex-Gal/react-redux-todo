import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = {
    name: 'tasks',
    initialState: {
        tasks: null,
        isTasksLoaded: false,
        filterInput: ''
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setIsTasksLoaded: (state, action) => {
            state.isTasksLoaded = action.payload;
        },
        setFilterInput: (state, action) => {
            state.filterInput = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(tasksSlice);