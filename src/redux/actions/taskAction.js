import {createAction} from '@reduxjs/toolkit';


const updateTaskRequest = createAction('update/updateTaskRequest');
const updateTaskSuccess = createAction('update/updateTaskSuccess');
const updateTaskError = createAction('update/updateTaskError');


export default {
    updateTaskRequest,
    updateTaskSuccess,
    updateTaskError
}