import {actions} from '../reducers/filterInputText';
import {store} from '../store';

export const filterInputTextAction = (str) => store.dispatch(actions.filterInputText(str));