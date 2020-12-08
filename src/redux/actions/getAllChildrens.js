import { createAction } from '@reduxjs/toolkit';

const getAllChildrensRequest = createAction('user/getChildrensRequest');
const getAllChildrensSuccess = createAction('user/getChildrensSuccess');
const getAllChildrensError = createAction('user/getChildrensError');

export default {
  getAllChildrensRequest,
  getAllChildrensSuccess,
  getAllChildrensError,
};
