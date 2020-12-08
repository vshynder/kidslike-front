import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

export const habbitsReducer = createReducer([], {
  [actions.addHabitSuccess]: (state, action) => {
    state.push(action.payload);
  },

  [actions.getAllSuccess]: (state, action) => {
    return (state = action.payload);
  },
  [actions.updateCheckedSuccess]: (state, action) => {
    const workingState = [...state];
    workingState.map((el) =>
      el._id === action.payload.idHabbit
        ? (el.sprintHabbit = action.payload.newSprintHabbit)
        : el,
    );
  },

  [actions.deletedSuccess]: (state, action) => {
    return state.filter((el) => el._id !== action.payload.idHabbit);
  },
  [actions.updSuccess]: (state, action) => {
    return state.map((el) =>
      el._id === action.payload.changeId ? (el = action.payload.data) : el,
    );
  },
});

export default habbitsReducer;

//  Для редюсера error если такой будет
// [actions.getAllHabbitsError] : (state, action) => action.payload,
// [actions.updError] : (state, action) => action.payload,
// [actions.deletedError] : (state, action) => action.payload,
// [actions.updateCheckedError] : (state, action) => action.payload,
// [actions.getAllSuccess]: ()=>null,
// [actions.updateCheckedSuccess]: ()=>null,
// [actions.deletedSuccess]: ()=>null,
// [actions.updSuccess]: ()=>null,
