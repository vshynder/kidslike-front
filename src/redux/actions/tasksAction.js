import {createAction} from '@reduxjs/toolkit';

const getAllTasksRequest = createAction('tasks/getAllTasksRequest');
const getAllTasksSuccess = createAction('present/getAllTasksSuccess');
const getAllTasksError = createAction('present/getAllTasksError');



export default {
    getAllTasksRequest,
    getAllTasksSuccess,
    getAllTasksError,
}