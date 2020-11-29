// import {createAction} from '@reduxjs/toolkit';


// Registration
const registrationRequest = () => ({
    type: 'auth/REGISTER_REQUEST',
  });
  
const registrationSuccess = response => ({
    type: 'auth/REGISTER_SUCCESS',
    payload: { response },
  });
  
const registrationError = error => ({
    type: 'auth/REGISTER_ERROR',
    payload: { error },
  });


  // set token in redux store
const setTokenInStore = token => ({
  type: 'SET_TOKEN_IN_STORE',
  payload: {
    token,
  },
});

export default {
  registrationRequest,
  registrationError,
  registrationSuccess,
  setTokenInStore
};