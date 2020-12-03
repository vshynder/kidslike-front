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
      return dispatch(taskAction.getAllTasksSuccess(...response.data));
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

  axios
    .patch(`/api/tasks/confirm/${id}`)
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

  axios
    .patch(`/api/tasks/notconfirm/${id}`)
    .then(() => dispatch(taskAction.notconfirmTaskSuccess()))
    .catch((err) => dispatch(taskAction.notconfirmTaskError(err)));
};

const addTask = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }

  token.set(acToken);
  dispatch(taskAction.addTaskRequest);

  axios
    .post(`/api/tasks/${id}`)
    .then((res) => dispatch(taskAction.addTaskSuccess(res.data)))
    .catch((err) => dispatch(taskAction.addTaskError(err)));
};

export default {
  getAllTasks,
  сonfirmTask,
  notConfirmTask,
  addTask,
};
