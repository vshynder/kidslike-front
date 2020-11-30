import axios from 'axios';
import authActions from '../actions/authActions';
// axios.defaults.baseURL = 'https://kidslike-back-end.herokuapp.com';

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const loginUser = (user) => (dispatch) => {
  dispatch(authActions.loginUserRequest());

  axios
    .post('https://kidslike-back-end.herokuapp.com/api/auth/login', user)
    .then((response) => dispatch(authActions.loginUserSuccess(response.data)))
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

export default { loginUser, registrationUser };
