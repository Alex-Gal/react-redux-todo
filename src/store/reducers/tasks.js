import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = {
    name: 'tasks',
    initialState: {
        tasks: [
            {id: 1, name: 'Task1', important: true, active: true},
            {id: 2, name: 'Task2', important: false, active: false},
            {id: 3, name: 'Task3', important: true, active: true},
          ]
        // someInputStr: 'someInputStr',
        // filterStr: '',
        // comments: null,
        // isShowCommentsWithLike: true
    },
    reducers: {
        deleteTask(state, action) {
            console.log('state', state);
            console.log('action', action);
        },
        doneTask(state, action) {
            console.log('state', state);
            console.log('action', action);
        },
        changeTaskImportance(state, action) {
            console.log('state', state);
            console.log('action', action);
        },
        addNewTask(state, action) {
            console.log('state', state);
            console.log('action', action);
        },
        // filterInputText: (state, payload) => {
        //     state.someInitialState = action.payload;
        // }
    }
};

// export const {deleteTask, doneTask, changeTaskImportance, addNewTask} = tasksSlice.actions;
// export default tasksSlice.reducer;

// Для использования actinons и reducer из отдельного файла
export const {actions, reducer} = createSlice(tasksSlice);