import { createReducer } from '@reduxjs/toolkit';
import tasksAction from '../actions/tasksAction';

const getTasks = (state, action) => {
  return [...state, action.payload];
};

const confirmTask = (state, action) => {
  return [...state];
};
const notConfirmTask = (state, action) => {
  return [...state];
};

// const addTask = (state, action) => {
//   return [...state, action.payload];
// };

const tasks = createReducer([], {
  [tasksAction.getAllTasksSuccess]: getTasks,
  [tasksAction.confirmTaskSuccess]: confirmTask,
  [tasksAction.notconfirmTaskRequest]: notConfirmTask,
  [tasksAction.addTaskSuccess]: (state, action) => {
    console.log('state: ', state);
    console.log('actions: ', action);
    return [...state, action.payload];
  },
});

export default {
  tasks,
};
