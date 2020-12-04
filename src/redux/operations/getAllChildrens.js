import axios from 'axios';
import getChildrensActions from '../actions/getAllChildrens';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getChildrens = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }
  token.set(acToken);
  dispatch(getChildrensActions.getAllChildrensRequest());
  axios
    .get(`https://kidslike-back-end.herokuapp.com/api/children/allChildrens`)
    .then((response) => {
      token.set(response.data.token);
      dispatch(getChildrensActions.getAllChildrensSuccess(response.data));
    })
    .catch((error) => console.log("error: getChildrensOperation"));
};

export default {
    getChildrens,
};
