import axios from 'axios';
import action from '../actions/presentAction';
import { BACKEND_URI } from '../../constants.js';
import { refreshJWTmiddleware } from '../refresh';

const setAuthToken = (token) => {
  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
};

const addPresent = (fD) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }

  dispatch(action.addPresentRequest());
  const url = `${BACKEND_URI}/presents/`;
  // axios
  //   .post(`${BACKEND_URI}/presents/`, fD)
  //   .then((res) => {
  //     dispatch(action.addPresentSuccess(res.data));
  //   })
  refreshJWTmiddleware(
    {
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
      data: fD,
    },
    refreshToken,
    dispatch,
  )
    .then((res) => dispatch(action.addPresentSuccess(res.data)))
    // .catch((error) => dispatch(action.addPresentError(error)));
    .catch((error) => console.log(error));
};

const updatePresent = (fD, idPresent) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // setAuthToken(acToken);
  console.log(fD);
  dispatch(action.updatePresentRequest());
  // axios
  //   .patch(`${BACKEND_URI}/presents/${idPresent}`, fD)
  const url = `${BACKEND_URI}/presents/${idPresent}`;
  refreshJWTmiddleware(
    {
      method: 'patch',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
      data: fD,
    },
    refreshToken,
    dispatch,
  )
    .then((res) => {
      console.log(res.data);
      return dispatch(action.updatePresentSuccess(res.data));
    })
    // .catch((error) => dispatch(action.updatePresentError(error)));
    .catch((error) => console.log(error));
};

const removePresent = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // setAuthToken(acToken);
  dispatch(action.removePresentRequest());
  // axios
  //   .delete(`${BACKEND_URI}/presents/${id}`)
  const url = `${BACKEND_URI}/presents/${id}`;
  refreshJWTmiddleware(
    {
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then(() => dispatch(action.removePresentSuccess(id)))
    // .catch((error) => dispatch(action.removePresentError(error)));
    .catch((error) => console.log(error));
};

const getAllPresents = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // setAuthToken(acToken);
  dispatch(action.getAllPresentRequest());
  const url = `${BACKEND_URI}/presents`;
  // axios
  //   .get(`${BACKEND_URI}/presents`)
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
    .then((res) => {
      return dispatch(action.getAllPresentSuccess(res.data));
    })
    // .catch((error) => dispatch(action.getAllPresentError(error)));
    .catch((error) => console.log(error));
};

const buyPresentById = (idPresent, reward, childId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // setAuthToken(acToken);
  dispatch(action.buyPresentRequest());
  // axios
  //   .patch(`${BACKEND_URI}/presents/buy/${idPresent}`)
  const url = `${BACKEND_URI}/presents/buy/${idPresent}`;
  refreshJWTmiddleware(
    {
      method: 'patch',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then((response) => {
      const refreshData = {
        newReward: reward,
        childId: childId,
      };
      return dispatch(
        action.buyPresentSuccess(refreshData),
        dispatch(action.removePresentSuccess(idPresent)),
      );
    })
    .catch((error) => dispatch(action.buyPresentError(error)));
};

export default {
  addPresent,
  updatePresent,
  removePresent,
  getAllPresents,
  buyPresentById,
};
