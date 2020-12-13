import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import { withCookies, useCookies } from 'react-cookie';

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
import childrenOperation from './redux/operations/getAllChildrens';
import Layout from './components/Layout/Layout';

const App = ({
  userToken,
  getAllHabbits,
  onGetCurrentUser,
  getAllTasks,
  getAllPresents,
  getAllChildren,
  setTokenState,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(
    'accessToken',
    'refreshToken',
  );
  console.log(cookies);
  useEffect(() => {
    if (cookies.accessToken) {
      setTokenState({
        accessToken: cookies.accessToken,
        refreshToken: cookies.refreshToken,
      });
    }

    onGetCurrentUser();
    if (userToken) {
      getAllChildren();
      getAllTasks();
      getAllPresents();
      getAllHabbits();
    }

    removeCookie('accessToken');
    removeCookie('refreshToken');
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact component={AuthPage} />
        <Route path="/login" exact component={SignInPage} />
        <Route path="/register" component={SiginUpPage} />
        {userToken && (
          <>
            <Layout />
            <PrivateRouter path="/main" exact component={Main} />
            <PrivateRouter path="/presents" exact component={PresentPage} />
            <PrivateRouter
              path="/childTasks/:name/:gender"
              exact
              component={ChildTaskPage}
            />
            <PrivateRouter path="/tasks" exact component={TasksPage} />
          </>
        )}
        <Redirect to={'/'} />
      </Switch>
    </>
  );
};

// {userToken ? (
//   <>
//     <Layout />

//     <Switch>
//       <PrivateRouter path="/main" exact component={Main} />
//       <PrivateRouter path="/presents" exact component={PresentPage} />
//       <PrivateRouter
//         path="/childTasks/:name/:gender"
//         exact
//         component={ChildTaskPage}
//       />
//       <PrivateRouter path="/tasks" exact component={TasksPage} />
//       {/* <Redirect to={'/main'} /> */}
//     </Switch>
//   </>
// ) : (
//   <Switch>
//     <Route path="/" exact component={AuthPage} />
//     <Route path="/login" exact component={SignInPage} />
//     <Route path="/register" component={SiginUpPage} />
//     <Redirect to={'/'} />
//   </Switch>
// )}

const mapStateToProps = (state) => ({
  userToken: state.user.accessToken,
});

const mapDispatchProps = (dispatch) => ({
  setTokenState: (tokens) => dispatch(authOperation.setTokenState(tokens)),
  onGetCurrentUser: () => dispatch(authOperation.getCurrentUser()),
  getAllTasks: () => dispatch(taskOperations.getAllTasks()),
  getAllPresents: () => dispatch(presentOperations.getAllPresents()),
  getAllHabbits: () => dispatch(habbitsOperations.getAllHabbitsByUser()),
  getAllChildren: () => dispatch(childrenOperation.getChildrens()),
});

export default connect(mapStateToProps, mapDispatchProps)(withCookies(App));
