import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import navigation from './components/AuthPageNavigation/navigation';
import SiginUpPage from './components/SiginUpPage/SiginUpPage';
import AuthPage from './components/AuthPage/AuthPage';
// import Main from './components/MainPage/MainPage';
// import ChildTaskPage from './components/ChildTaskPage/ChildTaskPage';
import PrivateRouter from './components/MainPage/PrivateRoutes';
// import PresentPage from './components/PresentsPage/PresentPage';
// import GoogleFacebookLogIn from './components/GoogleFacebookLogIn';

import ContainerForAllHabbits from './components/ContainerForAllHabbits/ContainerForAllHabbits'; // For Main

import './assets/fonts.css';
import './assets/basic.css';

const App = () => (
  <Switch>
    {/* <Route path="/" exact component={AuthPage} /> */}
    {/* <Route path="/login" exact component={GoogleFacebookLogIn} /> */}
    <Route path="/register" component={SiginUpPage} />
    {/* <PrivateRouter path="/main" exact component={Main} />
    <PrivateRouter path="/presents" exact component={PresentPage} />
    <PrivateRouter path="/tasks" exact component={ChildTaskPage} /> */}
    <Redirect to={'/'} />
  </Switch>
);

export default App;
