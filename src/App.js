import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/MainPage/MainPage';
import PrivateRouter from './components/MainPage/PrivateRoutes';
import InformationByTask from './components/InformationByTask';

import './assets/fonts.css';
import './assets/basic.css';
import InformationItem from './components/IformationOnChild_(sidebar)/InformationItem';

const App = () => (
  // <Switch>
  //   <PrivateRouter path="/main" exact component={Main} />
  // </Switch>
  <InformationByTask />
);

export default App;
