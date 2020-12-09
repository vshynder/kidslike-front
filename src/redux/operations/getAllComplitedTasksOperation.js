import axios from 'axios';
import getAllComplitedTasksActions from '../actions/getAllComplitedTasks';
import { BACKEND_URI } from '../../constants.js';
import { refreshJWTmiddleware } from '../refresh';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const getTasks = (childId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // token.set(acToken);
  dispatch(getAllComplitedTasksActions.getAllTasksRequest());
  const url = `${BACKEND_URI}/tasks/${childId}`;
  refreshJWTmiddleware(
    {
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    // axios
    //   .get(`${BACKEND_URI}/tasks/${childId}`)
    .then((response) => {
      // token.set(response.data.token);
      return dispatch(
        getAllComplitedTasksActions.getAllTasksSuccess(response.data),
      );
    })
    .catch((error) => console.log('error: getAllComplitedTasksOperation'));
};

export default {
  getTasks,
};
