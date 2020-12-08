import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import navigation from './components/AuthPageNavigation/navigation';
import SiginUpPage from './components/SiginUpPage/SiginUpPage';
import AuthPage from './components/AuthPage/AuthPage';
import Main from './components/MainPage/MainPage.js';
import ChildTaskPage from './components/ChildTaskPage/ChildTaskPage';
import PrivateRouter from './components/MainPage/PrivateRoutes';
import PresentPage from './components/PresentsPage/PresentPage';
import TasksPage from './components/TasksPage';

import SignInPage from './components/SignInPage/SignInPage';

import './assets/fonts.css';
import './assets/basic.css';
import authOperation from './redux/operations/authOperations';
import taskOperations from './redux/operations/tasksOperation';
import presentOperations from './redux/operations/presentOperation';
import habbitsOperations from './redux/operations/habbitOperation';

const App = ({
  userToken,
  getAllHabbits,
  onGetCurrentUser,
  getAllTasks,
  getAllPresents,
}) => {
  useEffect(() => {
    onGetCurrentUser();
    if (userToken) {
      getAllTasks();
      getAllPresents();
      getAllHabbits();
    }
  }, []);
  return (
    <Switch>
      <Route path="/" exact component={AuthPage} />
      <Route path="/login" exact component={SignInPage} />
      <Route path="/register" component={SiginUpPage} />
      <PrivateRouter path="/main" exact component={Main} />
      <PrivateRouter path="/presents" exact component={PresentPage} />
      <PrivateRouter
        path="/childTasks/:name/:gender"
        exact
        component={ChildTaskPage}
      />
      <PrivateRouter path="/tasks" exact component={TasksPage} />
      <Redirect to={'/'} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.accessToken,
});

const mapDispatchProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(authOperation.getCurrentUser()),
  getAllTasks: () => dispatch(taskOperations.getAllTasks()),
  getAllPresents: () => dispatch(presentOperations.getAllPresents()),
  getAllHabbits: () => dispatch(habbitsOperations.getAllHabbitsByUser()),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
