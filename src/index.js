import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App.jsx';
import './styles/main.scss';
import {ErrorBoundary} from './error-boundary/ErrorBoundary';
import {store} from './store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
  ,
  document.getElementById('app')
);

// store.subscribe(() => {
//   console.log(store.getState());
// });