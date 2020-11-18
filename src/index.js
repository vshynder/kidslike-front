import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from './redux';
/* font Rubik */
import './components/AddChildForm/AddChildFont.module.css'

/* Style normalize */
import './assets/normalize.css';


const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);




