import { createAction } from '@reduxjs/toolkit';

const registrationUserRequest = createAction('user/registration/request');
const registrationUserSuccess = createAction('user/registration/success');
const registrationUserError = createAction('user/registration/error');

const loginUserRequest = createAction('user/login/request');
const loginUserSuccess = createAction('user/login/success');
const loginUserError = createAction('user/login/error');

export default {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  registrationUserRequest,
  registrationUserSuccess,
  registrationUserError,
};
