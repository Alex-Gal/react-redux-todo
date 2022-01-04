import React from 'react';
import {TaskItem} from './task-item/TaskItem';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// export const TaskList = ({tasks}) => (
export const TaskList = () => {
    const tasks = useSelector(state => state.tasksReducer.tasks);
    
    return (
        <div className={'TaskList'}>
            {
                tasks.map((task) => 
                    <TaskItem  
                        key={task.id}
                        {...task}  
                        // id={task.id} 
                        // name={task.name} 
                        // important={task.important} 
                        // active={task.active} 
                    />)
            }
        </div>
    );
};

    

// TaskList.propTypes = {
//     tasks: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             important: PropTypes.any.isRequired,
//             active: PropTypes.bool.isRequired
//         })
//     ).isRequired
// };