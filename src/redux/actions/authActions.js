import { createAction } from '@reduxjs/toolkit';

const loginUserRequest = createAction('user/login/request');
const loginUserSuccess = createAction('user/login/success');
const loginUserError = createAction('user/login/error');

export default {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
};
