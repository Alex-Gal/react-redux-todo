import React, {useState, useContext} from 'react';
import {ControlsBarContext} from './ControlsBarContext';

export const Form = () => {
    const {addNewTask} = useContext(ControlsBarContext);

    const [state, setState] = useState({name: '', important: true});
    // eslint-disable-next-line prefer-const
    let [btnDisabled, setBtnDisabled] = useState(true);

    function inputNameHandler(e) {
        setBtnDisabled(e.target.value.length > 0 ? btnDisabled = false : true);

        setState({
            ...state,
            name: e.target.value
        });
    }

    function inputImportanceHandler(e) {
        setState({
            ...state,
            important: e.target.value
        });
    }

    function buttonHandler() {
        const {name, important, active = true} = state;

        addNewTask({
            id: Date.now(),
            name,
            important,
            active
        });
    }

    return (
        <div className='Form'>
            <p className='enterTaskName'>Enter task name</p>
            <input className='FormInput' value={state.name} onChange={inputNameHandler} type='text' placeholder='Enter new task name' />
            <p className='selectImportance'>Select importance</p>
            <select className='FormInput' value={state.important} onChange={inputImportanceHandler}>
                <option>true</option>
                <option>false</option>
            </select>
            <button className='addTaskButton' disabled={btnDisabled} onClick={buttonHandler}>ADD TASK</button>
        </div>
    );
};