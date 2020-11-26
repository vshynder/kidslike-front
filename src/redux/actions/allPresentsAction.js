import { createAction } from '@reduxjs/toolkit';

const getAllPresentsRequest = createAction('presents/request');
const getAllPresentsSuccess = createAction('presents/success');
const getAllPresentsError = createAction('presents/error');

export default {
  getAllPresentsRequest,
  getAllPresentsSuccess,
  getAllPresentsError,
};
