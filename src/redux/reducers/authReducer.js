import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initState = {
  name: '',
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
});
