import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/MainPage/MainPage';
import PrivateRouter from './components/MainPage/PrivateRoutes';

import './assets/fonts.css';
import './assets/basic.css';

const App = () => (
  <Switch>
    <PrivateRouter path="/main" exact component={Main} />
  </Switch>
);

export default App;
