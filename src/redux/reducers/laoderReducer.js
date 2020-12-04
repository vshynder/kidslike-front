import actions from '../actions/allHabbitsAction';
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
});
