import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...routeProps }) => {
  //   прибрати, коли буде готовий редакс.
  const temp = true;
  return (
    <Route
      {...routeProps}
      render={(props) =>
        temp ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  //   token: state.user.accessToken,
  // шаблон. можливо для зміни
});

export default connect(mapStateToProps)(PrivateRoute);
