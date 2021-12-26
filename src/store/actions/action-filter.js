import {actions} from '../reducers/filter';
import {store} from '../store';

export const filterAction = () => store.dispatch(actions.filter());