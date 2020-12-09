import axios from 'axios';
import addChildActions from '../../components/AddChildForm/AddChildActions';
import { BACKEND_URI } from '../../constants.js';
import { refreshJWTmiddleware } from '../refresh';

const addChild = (name, gender) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();

  dispatch(addChildActions.addChildRequest());
  const url = `${BACKEND_URI}/children/addchild`;
  refreshJWTmiddleware(
    {
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
      data: {
        name,
        gender,
      },
    },
    refreshToken,
    dispatch,
  )
    .then((response) => {
      dispatch(addChildActions.addChildSuccess(response.data));
    })
    .catch((error) => addChildActions.addChildError(error));
};

export default {
  addChild,
};
