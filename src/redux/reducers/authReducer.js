import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initState = {
  username: '',
  accessToken: null,
  refreshToken: null,
  avatarURL: null,
  email: null,
};

export const authReducer = createReducer(initState, {
  [authActions.loginUserSuccess]: (state, action) => {
    console.log(action.payload);
    return { ...state, ...action.payload };
  },
  [authActions.registrationUserSuccess]: (state, action) => {
    return { ...state, ...action.payload.user };
  },
});
