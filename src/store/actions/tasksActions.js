import {actions as taskActions} from '../reducers/tasks';
import {store} from '../store';

export const deleteTaskAction = (payload) => store.dispatch(taskActions.deleteTask(payload));
export const doneTaskAction = (payload) => store.dispatch(taskActions.doneTask(payload));
export const changeTaskImportanceAction = (payload) => store.dispatch(taskActions.changeTaskImportance(payload));