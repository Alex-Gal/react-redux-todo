import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {actions} from './store/reducers/tasks';
import {setTasksAction, isTasksLoadedAction} from './store/actions/tasksActions';

import {TaskList} from './components/task-list/TaskList';
import {ControlsBar} from './components/controls-bar/ControlsBar';
import {LoadTasks} from './components/task-list/load-tasks/LoadTasks';
import {TaskListContext} from './components/task-list/TaskListContext';
import {ControlsBarContext} from './components/controls-bar/ControlsBarContext';

export const App = () => {
  const {tasks, isTasksLoaded} = useSelector((state) => state.tasksReducer);

  const [displayedList, setDisplayedList] = useState('active');
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    LoadTasks().then((data) => {
      setTasksAction(data);
      isTasksLoadedAction(true);
    });
  }, []);

  if (!isTasksLoaded) {
    return <div>Loading...</div>;
  }
  //Готово
  const addNewTask = (newTask) => {
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasksAction(newTasks);
  };

  const doneTask = (selectedId) => {
    const newTasks = tasks.map((item) => {
      const {id, active} = item;
      return {
        ...item,
        active: id === selectedId ? !active : active
      };
    });
    setTasksAction(newTasks);
  };

  const deleteTask = (selectedId) => {
      const newTasks = tasks.filter((item) => item.id !== selectedId);
      setTasksAction(newTasks);
  };

  const toggleTaskImportance = (selectedId) => {
      const newTasks = tasks.map((item) => {
        const {id, important} = item;
        return {
          ...item,
          important: id === selectedId ? !important : important
        };
      });
    setTasksAction(newTasks);
  };

  // Не готово!!!!!!!!!!!!!!1
  // const [displayedList, setDisplayedList] = useState('active');
  // const [filterInput, setFilterInput] = useState('');

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

  const filteredTasks = changeDisplayedList(tasks, displayedList);
  const filteredInputByText = filterInputText(filteredTasks, filterInput);

  return (
    <div className='App'>
      <h2 className='Title'>TODO APP</h2>
      <ControlsBarContext.Provider value={{addNewTask: addNewTask}}>
        <ControlsBar
          changeDisplayedListHandler={changeDisplayedListHandler}
          displayedList={displayedList}
          filterInputHandler={filterInputHandler} />
          filterInput={filterInput}
      </ControlsBarContext.Provider>

      <TaskListContext.Provider value={
        {
          toggleTaskImportance: toggleTaskImportance,
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