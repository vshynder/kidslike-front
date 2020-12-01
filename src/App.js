import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import navigation from './components/AuthPageNavigation/navigation';
import SiginUpPage from './components/SiginUpPage/SiginUpPage';
import AuthPage from './components/AuthPage/AuthPage';
// import Main from './components/MainPage/MainPage.js';
// import ChildTaskPage from './components/ChildTaskPage/ChildTaskPage';
import PrivateRouter from './components/MainPage/PrivateRoutes';
// import PresentPage from './components/PresentsPage/PresentPage';

import SignInPage from './components/SignInPage/SignInPage';

import './assets/fonts.css';
import './assets/basic.css';

// import ContainerForAllHabbits from './components/ContainerForAllHabbits/ContainerForAllHabbits';

const App = () => (
  <Switch>
    {/* <Route path="/" exact component={AuthPage} />
    <Route path="/login" exact component={SignInPage} />
    <Route path="/register" component={SiginUpPage} /> */}

    {/* <PrivateRouter path="/main" exact component={Main} /> */}
    {/* <PrivateRouter path="/presents" exact component={PresentPage} /> */}
    {/* <PrivateRouter path="/tasks" exact component={ChildTaskPage} /> */}
    {/* <Redirect to={'/'} /> */}
  </Switch>
);

export default App;
