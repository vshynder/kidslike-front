import axios from 'axios';
import action from '../actions/taskAction';

const updateTask = (id, { title, reward, daysToDo }) => (dispatch) => {
  dispatch(action.updateTaskRequest());
  axios
    .patch(`https://kidslike-back-end.herokuapp.com/api/tasks/${id}`, {
      title,
      reward,
      daysToDo,
    })
    .then((res) => {
      dispatch(action.updateTaskSuccess(res.data));
    })
    .catch((error) => dispatch(action.updateTaskError(error)));
};

export default {
  updateTask,
};
