import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = {
    name: 'tasks',
    initialState: {
        tasks: null,
        isTasksLoaded: false
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setIsTasksLoaded: (state, action) => {
            state.isTasksLoaded = action.payload;
        }
    }
};

export const {actions, reducer} = createSlice(tasksSlice);