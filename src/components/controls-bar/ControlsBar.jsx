import React from 'react';
import {Form} from './Form';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

export const ControlsBar = ({filterInputHandler, changeDisplayedListHandler}) => {
    const {filterInput} = useSelector((state) => state.tasksReducer);

    return (
        <div className={'ControlsBar'}>
            <input value={filterInput} onChange={(e) => filterInputHandler(e.target.value)} className='ControlsBarInput' type='text'
                   placeholder='Search'/>
            <ControlsButtons changeDisplayedListHandler={changeDisplayedListHandler}/>
            <hr/>
            <Form />
        </div>
    );
};

const btnTypesArr = ['all', 'active', 'completed'];
const localization = {
    all: 'All',
    active: 'Active',
    completed: 'Completed'
};

const ControlsButtons = ({changeDisplayedListHandler}) => {
    const {displayedList} = useSelector((state) => state.tasksReducer);

    return (
        <div className={'ControlsBarButtons'}>
            {btnTypesArr.map((btnType) =>
                <ControlsBtn 
                    key={btnType} 
                    onClick={changeDisplayedListHandler} 
                    displayedList={displayedList} 
                    btnType={btnType} 
                    localization={localization} />
            )}
        </div>
    );
};  

const ControlsBtn = ({onClick, btnType, localization}) => {
    const {displayedList} = useSelector((state) => state.tasksReducer);

    return (
        <button
            onClick={() => onClick(btnType)}
            className={displayedList === btnType ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>{localization[btnType]}
        </button>
    );
}; 

ControlsBar.propTypes = {
    filterInputHandler: PropTypes.func.isRequired,
    changeDisplayedListHandler: PropTypes.func.isRequired
};