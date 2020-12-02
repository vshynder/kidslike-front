import { createAction } from '@reduxjs/toolkit';

const getAllTasksRequest = createAction('child/getTasksRequest');
const getAllTasksSuccess = createAction('child/getTasksSuccess');
const getAllTasksError = createAction('child/getTasksError');

export default {
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksError,
};
