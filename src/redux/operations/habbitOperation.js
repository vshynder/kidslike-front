import action from '../actions/allHabbitsAction';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1717';

const addHabit = ({ title, bal, childId }) => (dispatch) => {
  dispatch(action.addHabitRequest());
  axios
    .post('/api/habits/addHabit', { title, bal, childId })
    .then((res) => {
      dispatch(action.addHabitSuccess(res.data));
    })
    .catch((error) => dispatch(action.addHabitError(error)));
};

const getAllHabbitsByUser = (value) => (dispatch, getState) => {
  dispatch(action.getAllSuccess());
  axios
    .get('/api/habbits')
    .then((response) => dispatch(action.getAllSuccess(response.data)))
    .catch((err) => dispatch(action.getAllSuccess(err)));
};

const checkHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updateCheckedRequest());
  axios
    .patch('/api/habbits/checkhabbit', value)
    .then((response) => {
      dispatch(
        action.updateCheckedSuccess({
          ...response.data,
          idHabbit: value.idHabbit,
        }),
      );
    })
    .catch((err) => dispatch(action.updateCheckedError(err)));
};

const delHabbit = (value) => (dispatch, getState) => {
  dispatch(action.deletedRequest());

  axios
    .delete('/api/habbits/' + value)
    .then((response) => {
      console.log('response: ', response);
      dispatch(action.deletedSuccess({ idHabbit: value }));
    })
    .catch((err) => dispatch(action.deletedError()));
};

const updateHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updRequest());

  axios
    .patch('/api/habbits/updatehabbit', value)
    .then((response) => {
      console.log(response, value.idHabbit);
      dispatch(
        action.updSuccess({
          data: { ...response.data },
          changeId: value.idHabbit,
        }),
      );
    })
    .catch((err) => dispatch(action.updError(err)));
};

export default {
  addHabit,
  checkHabbit,
  delHabbit,
  updateHabbit,
  getAllHabbitsByUser,
};
