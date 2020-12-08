import { createAction } from '@reduxjs/toolkit';

const addChildRequest = createAction('childs/addRequest');
const addChildSuccess = createAction('childs/addSuccess');
const addChildError = createAction('childs/addError');

export default {
  addChildRequest,
  addChildSuccess,
  addChildError,
};
