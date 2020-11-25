import action from '../actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1717';

const checkHabbit = (value) => (dispatch, getState) => {
  axios
    .patch('/api/habbits/checkhabbit', value)
    .then((response) => {
      dispatch(
        action.updateCheckedHabbit({
          ...response.data,
          idHabbit: value.idHabbit,
        }),
      );
    })
    .catch((err) => console.log(err));
};

export default checkHabbit;
