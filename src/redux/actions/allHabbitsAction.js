import { createAction } from '@reduxjs/toolkit';

const addHabitRequest = createAction('habit/addHabitRequest');
const addHabitSuccess = createAction('habit/addHabitSuccess');
const addHabitError = createAction('habit/addHabitError');

const getAllSuccess = createAction('get-all/habbitSuccess');
const getAllRequest = createAction('get-all/habbitRequest');
const getAllError = createAction('get-all/habbitError');

const updateCheckedSuccess = createAction('check/habbitSuccess');
const updateCheckedRequest = createAction('check/habbitRequest');
const updateCheckedError = createAction('check/habbitError');

const deletedRequest = createAction('delete/habbitRequest');
const deletedSuccess = createAction('delete/habbitSuccess');
const deletedError = createAction('delete/habbitError');

const updSuccess = createAction('update/habbitSuccess');
const updRequest = createAction('update/habbitRequest');
const updError = createAction('update/habbitError');

export default {

  addHabitRequest,
  addHabitSuccess,
  addHabitError,

  getAllSuccess,
  getAllRequest,
  getAllError,

  updateCheckedSuccess,
  updateCheckedRequest,
  updateCheckedError,
  deletedRequest,
  deletedSuccess,
  deletedError,
  updSuccess,
  updRequest,
  updError,
};
