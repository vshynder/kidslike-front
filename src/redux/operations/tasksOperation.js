import axios from 'axios';
import taskAction from '../actions/tasksAction';

// axios.defaults.baseURL = 'http://kidslike-back-end.herokuapp.com';

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

  const url = 'http://kidslike-back-end.herokuapp.com/api/tasks'
  axios
    .get(url, {
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
    })
    .then((response) => {
      console.log("response: ", response.data)
      return dispatch(taskAction.getAllTasksSuccess(response.data));
    })
    .catch((err) => dispatch(taskAction.getAllTasksError(err)));
};

const сonfirmTask = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }
  token.set(acToken);
  dispatch(taskAction.confirmTaskRequest());
 
const url = `http://kidslike-back-end.herokuapp.com/api/tasks/confirm/${id}`

  axios
    .patch(url, {
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
    })
    .then(() => dispatch(taskAction.confirmTaskSuccess()))
    .catch((err) => dispatch(taskAction.confirmTaskError(err)));
};
const notConfirmTask = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }
  token.set(acToken);
  dispatch(taskAction.notconfirmTaskRequest());

  const url = `http://kidslike-back-end.herokuapp.com/api/tasks/notconfirm/${id}`

  axios
    .patch(url, {
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
    })
    .then(() => dispatch(taskAction.notconfirmTaskSuccess()))
    .catch((err) => dispatch(taskAction.notconfirmTaskError(err)));
};

const addTask = (childId, title, reward, daysToDo) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }

  dispatch(taskAction.addTaskRequest());
  console.log(childId, title, reward, daysToDo);

  const url = 'http://kidslike-back-end.herokuapp.com/api/tasks/' + childId;
  const body = {
    title,
    reward,
    daysToDo,
  };
  axios
    .post(url, body, {
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(taskAction.addTaskSuccess(response.data));
    })
    .catch((error) => console.log(error));
}

    const deleteTask = (taskId) => (dispatch, getState) => {
      const {
        user: { accessToken: acToken },
      } = getState();
    
      if (!acToken) {
        return;
      }  
      dispatch(taskAction.deleteTaskRequest())
      const url = 'http://kidslike-back-end.herokuapp.com/api/tasks/' + taskId

    axios
    .delete(url, {
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
    })
    .then(() => dispatch(taskAction.deleteTaskSuccess(taskId)))
    .catch((err) => dispatch(taskAction.notconfirmTaskError(err)));  
};

export default {
  getAllTasks,
  сonfirmTask,
  notConfirmTask,
  addTask,
  deleteTask,
};
