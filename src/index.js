import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store ,persistor} from './redux';
import { PersistGate } from 'redux-persist/integration/react'


import { BrowserRouter } from 'react-router-dom';
/* font Rubik */
import './components/AddChildForm/AddChildFont.module.css';

/* Style normalize */
import './assets/normalize.css';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
