import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { TaskListContext } from '../TaskListContext';

export const TaskItem = ({ id, name, important, active}) => {

    const {changeTaskImportance, deleteTask, doneTask} = useContext(TaskListContext);

    const deleteTaskFunc = () => {
        deleteTask(id);
    };

    const doneTaskFunc = () => {
        doneTask(id);
    };

    const changeTaskImportanceFunc = () => {
        changeTaskImportance(id);
    }

    return (
        <div className={'TaskItem'}>
            <div className={'TaskItemValues'}>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>important: {important.toString()}</p>
            </div>

            <div className={'TasksButtonBlock'}>
                <button onClick={doneTaskFunc} className={active ? 'TasksButton' : 'NotActiveTask'}>Done</button>
                <button onClick={deleteTaskFunc} className={'TasksButton'}>Delete</button>
                <button onClick={changeTaskImportanceFunc} className={'TasksButton'}>Importance</button>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.any.isRequired,
    active: PropTypes.bool.isRequired
}