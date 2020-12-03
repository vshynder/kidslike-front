import {createAction} from '@reduxjs/toolkit';


const getAllPresentRequest = createAction('present/getAllPresentRequest');
const getAllPresentSuccess = createAction('present/getAllPresentSuccess');
const getAllPresentError = createAction('present/getAllPresentError');


const addPresentRequest = createAction('present/addPresentRequest');
const addPresentSuccess = createAction('present/addPresentSuccess');
const addPresentError = createAction('present/addPresentError');

const removePresentRequest = createAction('present/removePresentRequest');
const removePresentSuccess = createAction('present/removePresentSuccess');
const removePresentError = createAction('present/removePresentError');

const updatePresentRequest = createAction('present/updatePresentRequest');
const updatePresentSuccess = createAction('present/updatePresentSuccess');
const updatePresentError = createAction('present/updatePresentError');


export default {
    getAllPresentRequest,
    getAllPresentSuccess,
    getAllPresentError,
    
    addPresentRequest,
    addPresentSuccess,
    addPresentError,

    removePresentRequest,
    removePresentSuccess,
    removePresentError,

    updatePresentRequest,
    updatePresentSuccess,
    updatePresentError
}