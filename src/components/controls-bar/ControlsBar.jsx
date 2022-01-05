import React from 'react';
import {Form} from './Form';
import PropTypes from 'prop-types';

export const ControlsBar = ({filterInput, filterInputHandler}) => {
    // const filterInputFunc = (e) => {
    //     filterInputHandler(e.target.value);
    // };

    return (
        <div className={'ControlsBar'}>
            <input value={filterInput} onChange={(e) => filterInputHandler(e.target.value)} className='ControlsBarInput' type='text'
                   placeholder='Search'/>
            <ControlsButtons/>
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

const ControlsButtons = ({changeDisplayedListHandler, displayedList}) => (
    <div className={'ControlsBarButtons'}>
        {btnTypesArr.map((btnType) =>
            <ControlsBtn key={btnType} onClick={changeDisplayedListHandler} displayedList={displayedList} btnType={btnType} localization={localization} />
        )}
    </div>
);

const ControlsBtn = ({onClick, displayedList, btnType, localization}) => (
    <button
        onClick={() => onClick(btnType)}
        className={displayedList === btnType ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>{localization[btnType]}
    </button>
);

ControlsBar.propTypes = {
    displayedList: PropTypes.string.isRequired,
    filterInput: PropTypes.string.isRequired,
    filterInputHandler: PropTypes.func.isRequired,
    changeDisplayedListHandler: PropTypes.func.isRequired
};


// import React from 'react';
// import { Form } from './Form';
// import PropTypes from 'prop-types';

// export const ControlsBar = ({ displayedList, filterInput, filterInputHandler, changeDisplayedListHandler }) => {
//     const filterInputFunc = (e) => {
//         filterInputHandler(e.target.value);
//     };

//     return (
//         <div className={'ControlsBar'}>
//             <input value={filterInput} onChange={filterInputFunc} className='ControlsBarInput' type='text' placeholder='Search' />
//             <div className={'ControlsBarButtons'}>
//                 <button onClick={() => changeDisplayedListHandler('all')} className={displayedList === 'all' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>All</button>
//                 <button onClick={() => changeDisplayedListHandler('active')} className={displayedList === 'active' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Active</button>
//                 <button onClick={() => changeDisplayedListHandler('completed')} className={displayedList === 'completed' ? 'ControlsBarButtonsActive' : 'ControlsBarButtonsNotActive'}>Completed</button>
//             </div>
//             <hr />
//             <Form />
//         </div>
//     );
// };

// ControlsBar.propTypes = {
//     displayedList: PropTypes.string.isRequired,
//     filterInput: PropTypes.string.isRequired,
//     filterInputHandler: PropTypes.func.isRequired,
//     changeDisplayedListHandler: PropTypes.func.isRequired
// };