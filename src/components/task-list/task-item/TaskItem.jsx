import React, {useContext} from 'react';
import PropTypes from 'prop-types';

// import {TaskListContext} from '../TaskListContext';
import { useDispatch, useSelector } from 'react-redux';


export const TaskItem = ({id, name, important, active}) => {
    // const {doneTask, deleteTask, doneTask} = useContext(TaskListContext);
    // const deleteTask = useSelector(state => state);
    // console.log('deleteTask', deleteTask);
    // const dispatch = useDispatch();

    return (
        <div className={'TaskItem'}>
            <div className={'TaskItemValues'}>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>important: {important.toString()}</p>
            </div>

            <div className={'TasksButtonBlock'}>
                <button onClick={() => doneTask({id})} className={active ? 'TasksButton' : 'NotActiveTask'}>Done</button>
                <button onClick={() => deleteTaskAction({id})} className={'TasksButton'}>Delete</button>
                <button onClick={() => dispatch(changeTaskImportance({id}))} className={'TasksButton'}>Importance</button>
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