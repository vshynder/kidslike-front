import axios from 'axios';
import authActions from '../actions/authActions';

// axios.defaults.baseURL = 'https://kidslike-back-end.herokuapp.com';

const loginUser = (user) => (dispatch) => {
  dispatch(authActions.loginUserRequest());

  axios
    .post('https://kidslike-back-end.herokuapp.com/api/auth/login', user)
    .then((response) => dispatch(authActions.loginUserSuccess(response.data)))
    .catch((error) => console.log(error));
};

export default loginUser;
