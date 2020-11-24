import action from '../actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1717';

const checkHabbit = (value) => (dispatch, getState) => {
  console.log(action.checkHabbit);
  axios
    .patch('/api/habbits/checkhabbit', value)
    .then((response) => {
      console.log(response.data);
      // dispatch(action.checkHabbit(response.data));
    })
    .catch((err) => console.log(err));
};

export default checkHabbit;
