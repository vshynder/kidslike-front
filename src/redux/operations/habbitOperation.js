import action from '../actions/allHabbitsAction';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1717';

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
    .delete('/api/habbits/delhabbit/' + value)
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
      console.log('response: ', response);
      dispatch(action.updSuccess(value));
    })
    .catch((err) => dispatch(action.updError(err)));
};

export default { checkHabbit, delHabbit, updateHabbit };
