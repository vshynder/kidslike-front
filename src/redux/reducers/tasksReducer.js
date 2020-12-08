import { createReducer } from '@reduxjs/toolkit';
import tasksAction from '../actions/tasksAction';

const getTasks = (state, action) => {
  return action.payload;
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
  [tasksAction.deleteTaskSuccess]: (state, action) =>
    state.filter((task) => task._id !== action.payload),
  [tasksAction.notconfirmTaskRequest]: notConfirmTask,
  [tasksAction.addTaskSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [tasksAction.repeatTaskSuccess]: (state, action) =>
    console.log(action.payload),
});

export default {
  tasks,
};
