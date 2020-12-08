import actions from '../actions/allHabbitsAction';
import addChildAction from '../actions/getAllComplitedTasks';
import authActions from '../actions/authActions';
import getAllChildrenAction from '../actions/getAllChildrens';
import getAllComplitedTasksAction from '../actions/getAllComplitedTasks';
import presentActions from '../actions/presentAction';
import taskActions from '../actions/tasksAction';
import { createReducer } from '@reduxjs/toolkit';
console.log('sdsadasdsafsadfaFf');
export const loaderReducer = createReducer(false, {
  [actions.getAllHabbitsRequest]: () => true,
  [actions.updRequest]: () => true,
  [actions.deletedRequest]: () => true,
  [actions.deletedRequest]: () => true,
  [actions.getAllSuccess]: () => false,
  [actions.updateCheckedSuccess]: () => false,
  [actions.deletedSuccess]: () => false,
  [actions.updSuccess]: () => false,
  [actions.getAllHabbitsError]: () => false,
  [actions.updError]: () => false,
  [actions.deletedError]: () => false,
  [actions.updateCheckedError]: () => false,
  [actions.updateCheckedRequest]: () => false,

  [addChildAction.getAllTasksRequest]: () =>true,
  [addChildAction.getAllTasksSuccess]: () => false,
  [addChildAction.getAllTasksError]: () => false,

  [authActions.loginUserRequest]: () => true,
  [authActions.loginUserSuccess]: () => false,
  [authActions.loginUserError]: () => false,

  [authActions.registrationUserRequest]: () => true,
  [authActions.registrationUserSuccess]: () => false,
  [authActions.registrationUserError]: () => false,

  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [getAllChildrenAction.getAllChildrensRequest]: () => true,
  [getAllChildrenAction.getAllChildrensSuccess]: () => false,
  [getAllChildrenAction.getAllChildrensError]: () => false,

  [getAllComplitedTasksAction.getAllTasksRequest]: () => true,
  [getAllComplitedTasksAction.getAllTasksSuccess]: () => false,
  [getAllComplitedTasksAction.getAllTasksError]: () => false,

  [presentActions.getAllPresentRequest]: () => true,
  [presentActions.getAllPresentSuccess]: () => false,
  [presentActions.getAllPresentError]: () => false,

  [presentActions.addPresentRequest]: () => true,
  [presentActions.addPresentSuccess]: () => false,
  [presentActions.addPresentError]: () => false,

  [presentActions.removePresentRequest]: () => true,
  [presentActions.removePresentSuccess]: () => false,
  [presentActions.removePresentError]: () => false,

  [presentActions.updatePresentRequest]: () => true,
  [presentActions.updatePresentSuccess]: () => false,
  [presentActions.updatePresentError]: () => false,

  [taskActions.getAllTasksRequest]: () => true,
  [taskActions.getAllTasksSuccess]: () => false,
  [taskActions.getAllTasksError]: () => false,

  [taskActions.confirmTaskRequest]: () => true,
  [taskActions.confirmTaskSuccess]: () => false,
  [taskActions.confirmTaskError]: () => false,

  [taskActions.notconfirmTaskRequest]: () => true,
  [taskActions.notconfirmTaskSuccess]: () => false,
  [taskActions.notconfirmTaskError]: () => false,

  [taskActions.addTaskRequest]: () => true,
  [taskActions.addTaskSuccess]: () => false,
  [taskActions.addTaskError]: () => false,
  
  [taskActions.deleteTaskRequest]: () => true,
  [taskActions.deleteTaskSuccess]: () => false,
  [taskActions.deleteTaskError]: () => false,
});
