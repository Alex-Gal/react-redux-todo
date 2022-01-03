import {actions} from '../reducers/tasks';
import {store} from '../store';

export const deleteTaskAction = (str) => store.dispatch(actions.filterInputText(str));