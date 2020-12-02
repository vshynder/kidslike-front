import getAllComplitedTasksActions from '../actions/getAllComplitedTasks';
import { createReducer } from '@reduxjs/toolkit';

const allTasksCurrentChild = createReducer(null, {
  [getAllComplitedTasksActions.getAllTasksSuccess]: (state, action) =>
    (state = action.payload),
});

export default {
  allTasksCurrentChild,
};
