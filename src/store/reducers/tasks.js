import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = {
    name: 'tasks',
    initialState: {
        tasks: null
        // someInputStr: 'someInputStr',
        // filterStr: '',
        // comments: null,
        // isShowCommentsWithLike: true
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        doneTask(state, action) {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        }
        // deleteTask(state, action) {
        //     console.log(state);
        //     console.log(action);
        //     console.log(action.payload);
        //     console.log(action.payload.id);
        //     state.tasks = state.tasks.filter((tasks) => tasks.id !== action.payload.id);
        //     // const newTasksArr = prevTasks.filter((item) => item.id !== selectedId);
        //     // return (prevTasks = newTasksArr);

        //     console.log('state', state);
        //     console.log('action', action);
        // },

        // changeTaskImportance(state, action) {
        //     console.log('state', state);
        //     console.log('action', action);
        // },
        // addNewTask(state, action) {
        //     console.log('state', state);
        //     console.log('action', action);
        // }
        // filterInputText: (state, payload) => {
        //     state.someInitialState = action.payload;
        // }
    }
};

export const {actions, reducer} = createSlice(tasksSlice);