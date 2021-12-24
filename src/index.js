import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.jsx';
import './styles/main.scss';
import { ErrorBoundary } from './error-boundary/ErrorBoundary';
import { store } from './store/store.js';
// import { filter } from 'core-js/core/array';
import { filterAction } from './store/actions/action-filter.js';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  ,
  document.getElementById('app')
);

console.log(store.getState());
filterAction();