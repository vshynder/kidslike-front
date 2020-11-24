import axios from 'axios';
import addChildActions from '../../components/AddChildForm/AddChildActions';

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
    // Эта часть может переделываться в зависимости от redux state
    auth: { accessToken: acToken },
  } = getState();

  if (!acToken) {
    console.log('exit');
    return;
  }

  token.set(acToken);
  dispatch(addChildActions.addChildRequest());
  console.log(name, gender);
  axios
    .post('http://localhost:1717/api/children/addchild', { name, gender }) //Здесь эндпоинт поменяется когда сервер будет на хероку
    .then((response) => {
      token.set(response.data.token);
      dispatch(addChildActions.addChildSuccess(response.data));
    })
    .catch((error) => addChildActions.addChildError(error));
};

export default {
  addChild,
};
