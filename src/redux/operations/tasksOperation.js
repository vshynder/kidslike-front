import axios from 'axios';
import taskAction from '../actions/tasksAction';

axios.defaults.baseURL = 'http://kidslike-back-end.herokuapp.com';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

const getAllTasks = () => (dispatch, getState) => {
    const {
        user: { accessToken: acToken },
      } = getState();
    
      if (!acToken) {
        return;
      }
    token.set(acToken);
    dispatch(taskAction.getAllTasksRequest());
axios
    .get('/api/tasks')
    .then((response) => {
        return dispatch(taskAction.getAllTasksSuccess(...response.data))
})
    .catch((err) => dispatch(taskAction.getAllTasksError(err)));
};


export default {
    getAllTasks
}