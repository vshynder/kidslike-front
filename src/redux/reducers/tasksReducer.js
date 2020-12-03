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

const addTask = (state, action) => {
  return [...state, action.payload];
};
const tasks = createReducer(null, {
  [tasksAction.getAllTasksSuccess]: getTasks,
  [tasksAction.confirmTaskSuccess]: confirmTask,
  [tasksAction.notconfirmTaskRequest]: notConfirmTask,
  [tasksAction.addTaskSuccess]: addTask,
});

export default {
  tasks,
};
