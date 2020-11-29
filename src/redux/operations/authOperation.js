import axios from 'axios';
import authAction from '../actions/authAction';

axios.defaults.baseURL = 'http://localhost:1717/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const registration = credentials => dispatch => {
  dispatch(authAction.registrationRequest());
  axios
    .post('/auth/register', credentials)
    .then(response => {
      setAuthToken(response.data.token);
      dispatch(authAction.registrationSuccess(response.data));
    })
    .catch(error => {
      dispatch(authAction.registrationError(error));
    });
};