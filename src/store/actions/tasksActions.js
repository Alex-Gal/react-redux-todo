import {actions as taskActions} from '../reducers/tasks';
import {store} from '../store';

export const setTasksAction = (payload) => store.dispatch(taskActions.setTasks(payload));
export const isTasksLoadedAction = (payload) => store.dispatch(taskActions.setIsTasksLoaded(payload));
export const setFilterInputAction = (payload) => store.dispatch(taskActions.setFilterInput(payload));
