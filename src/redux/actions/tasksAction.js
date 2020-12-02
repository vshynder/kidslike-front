import { createAction } from '@reduxjs/toolkit';

const getAllTasksRequest = createAction('tasks/getAllTasksRequest');
const getAllTasksSuccess = createAction('present/getAllTasksSuccess');
const getAllTasksError = createAction('present/getAllTasksError');

const confirmTaskRequest = createAction('tasks/confirmTask');
const confirmTaskSuccess = createAction('present/confirmTask');
const confirmTaskError = createAction('present/confirmTask');

const notconfirmTaskRequest = createAction('tasks/confirmTask');
const notconfirmTaskSuccess = createAction('present/confirmTask');
const notconfirmTaskError = createAction('present/confirmTask');

export default {
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksError,
  confirmTaskRequest,
  confirmTaskSuccess,
  confirmTaskError,
  notconfirmTaskRequest,
  notconfirmTaskSuccess,
  notconfirmTaskError,
};
