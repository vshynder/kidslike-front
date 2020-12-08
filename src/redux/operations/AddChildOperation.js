import axios from 'axios';
import addChildActions from '../../components/AddChildForm/AddChildActions';
import {BACKEND_URI} from '../../constants.js';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addChild = (name, gender) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    return;
  }

  token.set(acToken);
  dispatch(addChildActions.addChildRequest());
  axios
    .post(
      `${BACKEND_URI}/children/addchild`,
      {
        name,
        gender,
      },
      {
        headers: {
          Authorization: 'Bearer ' + acToken,
        },
      },
    )
    .then((response) => {
      token.set(response.data.token);
      dispatch(addChildActions.addChildSuccess(response.data));
    })
    .catch((error) => addChildActions.addChildError(error));
};

export default {
  addChild,
};
