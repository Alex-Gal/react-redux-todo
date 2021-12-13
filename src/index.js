import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './styles/main.scss';
import { ErrorBoundary } from './error-boundary/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  ,
  document.getElementById('app')
);