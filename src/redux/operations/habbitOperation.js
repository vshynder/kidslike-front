import action from '../actions/allHabbitsAction';
import axios from 'axios';
import {BACKEND_URI} from '../../constants.js';

// axios.defaults.baseURL = 'http://localhost:1717';

const addHabit = (value) => (dispatch, getState) => {
  dispatch(action.addHabitRequest());

  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`;

  axios
    .post(`${BACKEND_URI}/habbits`, value)
    .then((res) => {
      dispatch(action.addHabitSuccess(res.data));
    })
    .catch((err) => dispatch(action.addHabitError(err.message)));
};

const getAllHabbitsByUser = (value) => (dispatch, getState) => {
  dispatch(action.getAllRequest());

  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`; // При авторизации токен не был записан в axios.defaults.headers.common.Authorization

  axios
    .get(`${BACKEND_URI}/habbits`)
    .then((response) => {
      dispatch(action.getAllSuccess(response.data));
    })
    .catch((err) => {
      dispatch(action.getAllError(err.message));
    });
};

const checkHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updateCheckedRequest());
  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`;
  axios
    .patch(
      `${BACKEND_URI}/habbits/checkhabbit`,
      value,
    )
    .then((response) => {
      const data = {
        ...response.data,
        idHabbit: value.idHabbit,
        confirmed: value.confirmed,
      };
      dispatch(action.updateCheckedSuccess(data));
    })
    .catch((err) => dispatch(action.updateCheckedError(err.message)));
};

const delHabbit = (value) => (dispatch, getState) => {
  dispatch(action.deletedRequest());

  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`;
  axios
    .delete(`${BACKEND_URI}/habbits/` + value)
    .then((response) => {
      dispatch(action.deletedSuccess({ idHabbit: value }));
    })
    .catch((err) => dispatch(action.deletedError(err.message)));
};

const updateHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updRequest());

  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`;

  axios
    .patch(
      `${BACKEND_URI}/habbits/updatehabbit`,
      value,
    )
    .then((response) => {
      dispatch(
        action.updSuccess({
          data: { ...response.data },
          changeId: value.idHabbit,
        }),
      );
    })
    .catch((err) => dispatch(action.updError(err.message)));
};

export default {
  addHabit,
  checkHabbit,
  delHabbit,
  updateHabbit,
  getAllHabbitsByUser,
};
