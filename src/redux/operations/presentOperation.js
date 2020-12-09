import axios from 'axios';
import action from '../actions/presentAction';
import {BACKEND_URI} from '../../constants.js';

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
};

const addPresent = (fD ) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }

  setAuthToken(acToken);
  dispatch(action.addPresentRequest());
  axios
    .post(`${BACKEND_URI}/presents/`, fD)
    .then((res) => {
      dispatch(action.addPresentSuccess(res.data));
    })
    .catch((error) => dispatch(action.addPresentError(error)));
};

const updatePresent = (fD, idPresent) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }

  setAuthToken(acToken);
  dispatch(action.updatePresentRequest());
  axios
    .patch(
      `${BACKEND_URI}/presents/${idPresent}`,
      fD,
    ) 
    .then((res) => {
      dispatch(action.updatePresentSuccess(res.data));
    })
    .catch((error) => dispatch(action.updatePresentError(error)));
};

const removePresent = (id) => (dispatch, getState) => {

  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }
  setAuthToken(acToken);
  dispatch(action.removePresentRequest());
  axios
    .delete(`${BACKEND_URI}/presents/${id}`)
    .then(() => dispatch(action.removePresentSuccess(id)))
    .catch((error) => dispatch(action.removePresentError(error)));
};

const getAllPresents = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }
  setAuthToken(acToken);
  dispatch(action.getAllPresentRequest());
  axios
    .get(`${BACKEND_URI}/presents`) 
    .then((res) => {
      dispatch(action.getAllPresentSuccess(res.data));
    })
    .catch((error) => dispatch(action.getAllPresentError(error)));
};

const buyPresentById = (idPresent, reward,childId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken },
  } = getState();
  if (!acToken) {
    return;
  }
  setAuthToken(acToken);
  dispatch(action.buyPresentRequest());
  axios.patch(`${BACKEND_URI}/presents/buy/${idPresent}`)
    .then(response => {
      const refreshData = {
        newReward:reward,
        childId:childId,
      }
      return dispatch(action.buyPresentSuccess(refreshData));
    }).catch(error => dispatch(action.buyPresentError(error)))
}


export default {
  addPresent,
  updatePresent,
  removePresent,
  getAllPresents,
  buyPresentById,
};
