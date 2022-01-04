import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {TaskListContext} from '../TaskListContext';
// import {doneTaskAction} from '../../../store/actions/tasksActions';

export const TaskItem = ({id, name, important, active}) => {

    // const {changeTaskImportance, deleteTask} = useContext(TaskListContext);
    
    const {changeTaskImportance, deleteTask, doneTask} = useContext(TaskListContext);

    return (
        <div className={'TaskItem'}>
            <div className={'TaskItemValues'}>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>important: {important.toString()}</p>
            </div>

            <div className={'TasksButtonBlock'}>
                <button onClick={() => doneTask(id)} className={active ? 'TasksButton' : 'NotActiveTask'}>Done</button>
                {/* <button onClick={() => doneTaskAction({id})} className={active ? 'TasksButton' : 'NotActiveTask'}>Done</button> */}
                <button onClick={() => deleteTask(id)} className={'TasksButton'}>Delete</button>
                <button onClick={() => changeTaskImportance(id)} className={'TasksButton'}>Importance</button>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.any.isRequired,
    active: PropTypes.bool.isRequired
};