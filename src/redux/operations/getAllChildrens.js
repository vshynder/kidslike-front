import axios from 'axios';
import getChildrensActions from '../actions/getAllChildrens';
import { BACKEND_URI } from '../../constants.js';
import { refreshJWTmiddleware } from '../refresh';
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const getChildrens = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // token.set(acToken);
  dispatch(getChildrensActions.getAllChildrensRequest());
  // axios
  //   .get(`${BACKEND_URI}/children/allChildrens`)
  const url = `${BACKEND_URI}/children/allChildrens`;
  refreshJWTmiddleware(
    {
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then((response) => {
      // token.set(response.data.token);
      dispatch(getChildrensActions.getAllChildrensSuccess(response.data));
    })
    .catch((error) => console.log('error: getChildrensOperation'));
};

export default {
  getChildrens,
};
