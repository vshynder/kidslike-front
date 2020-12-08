import axios from 'axios';
import authActions from '../actions/authActions';
// axios.defaults.baseURL = 'https://kidslike-back-end.herokuapp.com';

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = ' ';
};

const loginUser = (user) => (dispatch) => {
  dispatch(authActions.loginUserRequest());

  axios
    .post('https://kidslike-back-end.herokuapp.com/api/auth/login', user)
    .then((response) => {
      setAuthToken(response.data.accessToken);
      dispatch(authActions.loginUserSuccess(response.data));
    })
    .catch((error) => console.log(error));
};

const registrationUser = (user) => (dispatch) => {
  dispatch(authActions.registrationUserRequest());
  axios
    .post('https://kidslike-back-end.herokuapp.com/api/auth/register', user)
    .then((response) => {
      setAuthToken(response.data.accessToken);
      dispatch(authActions.registrationUserSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registrationUserError(error)));
};
const logOut = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }
  setAuthToken(acToken);

  dispatch(authActions.logoutRequest());

  axios
    .delete('https://kidslike-back-end.herokuapp.com/api/auth/logout')
    .then(() => {
      unsetAuthToken();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    user: { accessToken: accessToken },
  } = getState();
  if (!accessToken) {
    return;
  }

  setAuthToken(accessToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('http://kidslike-back-end.herokuapp.com/api/auth/current')
    .then((response) => {
      return dispatch(authActions.getCurrentUserSuccess(response.data));
    })

    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};

export default { loginUser, registrationUser, logOut, getCurrentUser };
