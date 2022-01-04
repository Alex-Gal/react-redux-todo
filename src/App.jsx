import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {actions} from './store/reducers/tasks';
import {setTasksAction} from './store/actions/tasksActions';

import {TaskList} from './components/task-list/TaskList';
import {ControlsBar} from './components/controls-bar/ControlsBar';
import {LoadTasks} from './components/task-list/load-tasks/LoadTasks';
import {TaskListContext} from './components/task-list/TaskListContext';
import {ControlsBarContext} from './components/controls-bar/ControlsBarContext';

export const App = () => {
  const {tasks} = useSelector((state) => state.tasksReducer);
  // const tasksReducer = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();

  // dispatch(actions.increment())
  // const {setTasks} = actions;
  console.log('tasks', tasks);
  // console.log('setTasks', setTasks);
  // const [tasks, setTasks] = useState(null);

  const [displayedList, setDisplayedList] = useState('active');
  const [filterInput, setFilterInput] = useState('');
  const [isTasksLoaded, setIsTasksLoaded] = useState(false);

  useEffect(() => {
    LoadTasks().then((data) => {
      setTasksAction(data);
      setIsTasksLoaded(true);
    });
  }, []);

  if (!isTasksLoaded) {
    return <div>Loading...</div>;
  }

  const deleteTask = (selectedId) => {
    const callback = (prevTasks) => {
      const newTasksArr = prevTasks.filter((item) => item.id !== selectedId);
      return (prevTasks = newTasksArr);
    };
    setTasks(callback);
  };

  const doneTask = (selectedId) => {
    const callback = (prevTasks) => {
      const newTasksArr = prevTasks.map((item) => {
        const {id, active} = item;
        return {
          ...item,
          active: id === selectedId ? !active : active
        };
      });
      return (prevTasks = newTasksArr);
    };
    setTasks(callback);
  };

  const changeTaskImportance = (selectedId) => {
    const callback = (prevTasks) => {

      const newTasksArr = prevTasks.map((item) => {
        const {id, important} = item;
        return {
          ...item,
          important: id === selectedId ? !important : important
        };
      });
      return (prevTasks = newTasksArr);
    };
    setTasks(callback);
  };

  const addNewTask = (newTask) => {
    const callback = (prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.push(newTask);
      return (prevTasks = newTasks);
    };
    setTasks(callback);
  };

  const changeDisplayedListHandler = (displayedList) => {
    setDisplayedList(displayedList);
  };

  const changeDisplayedList = (tasks, displayedList) => displayedList === 'all' 
      ? tasks
      : displayedList === 'active'
        ? tasks.filter((item) => item.active)
        : tasks.filter((item) => !item.active);

  const filterInputHandler = (filterInput) => {
    setFilterInput(filterInput);
  };
  
  const filterInputText = (tasks, filterInput) => {
    if (filterInput === '') {
      return tasks;
    } 
    return tasks.filter(({name}) => name.toLowerCase().includes(filterInput.toLowerCase()));
  };
  // const filterInputText = (tasks, filterInput) => {
  //   if (filterInput === '') {
  //     return tasks;
  //   } 
  //   return tasks.filter(({name}) => name.toLowerCase().includes(filterInput.toLowerCase()));
  // };

  const filteredTasks = changeDisplayedList(tasks, displayedList);
  const filteredInputByText = filterInputText(filteredTasks, filterInput);

  return (
    <div className='App'>
      <h2 className='Title'>TODO APP</h2>
      <ControlsBarContext.Provider value={{addNewTask: addNewTask}}>
        <ControlsBar 
          changeDisplayedListHandler={changeDisplayedListHandler} 
          displayedList={displayedList} 
          filterInput={filterInput} 
          filterInputHandler={filterInputHandler} />
      </ControlsBarContext.Provider>
      
      <TaskListContext.Provider value={
        {
          changeTaskImportance: changeTaskImportance, 
          deleteTask: deleteTask, 
          doneTask: doneTask
        }
      }>
        <TaskList 
          tasks={filteredInputByText} />
      </TaskListContext.Provider>
    </div>
  );
};