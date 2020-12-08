import axios from 'axios';
import getAllComplitedTasksActions from '../actions/getAllComplitedTasks';
import {BACKEND_URI} from '../../constans.js';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getTasks = (childId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }
  token.set(acToken);
  dispatch(getAllComplitedTasksActions.getAllTasksRequest());
  axios
    .get(`${BACKEND_URI}/tasks/${childId}`)
    .then((response) => {
      token.set(response.data.token);
      dispatch(getAllComplitedTasksActions.getAllTasksSuccess(response.data));
    })
    .catch((error) => console.log("error: getAllComplitedTasksOperation"));
};

export default {
  getTasks,
};
