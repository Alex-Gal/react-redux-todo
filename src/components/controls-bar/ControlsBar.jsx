import React from 'react';
import {Form} from './Form';
import PropTypes from 'prop-types';

export const ControlsBar = ({displayedList, filterInput, filterInputHandler, changeDisplayedListHandler}) => {
    const filterInputFunc = (e) => {
        filterInputHandler(e.target.value);
    };

    return (
        <div className={'ControlsBar'}>
            <input value={filterInput} onChange={filterInputFunc} className='ControlsBarInput' type='text' placeholder='Search' />
            <div className={'ControlsBarButtons'}>
                <button onClick={() => changeDisplayedListHandler('all')} className={displayedList === 'all' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>All</button>
                <button onClick={() => changeDisplayedListHandler('active')} className={displayedList === 'active' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Active</button>
                <button onClick={() => changeDisplayedListHandler('completed')} className={displayedList === 'completed' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Completed</button>
            </div>
            <hr />
            <Form />
        </div>
    );
};

ControlsBar.propTypes = {
    displayedList: PropTypes.string.isRequired,
    filterInput: PropTypes.string.isRequired,
    filterInputHandler: PropTypes.func.isRequired,
    changeDisplayedListHandler: PropTypes.func.isRequired
};