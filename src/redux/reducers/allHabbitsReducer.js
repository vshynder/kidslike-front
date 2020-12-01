import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

export const habbitsReducer = createReducer([], {
  [actions.getAllSuccess]: (state, action) => {
    return (state = action.payload);
  },
  [actions.updateCheckedSuccess]: (state, action) => {
    state.map((el) =>
      el._id === action.payload.idHabbit
        ? (el.sprintHabbit = action.payload.newSprintHabbit)
        : el,
    );
  },

  [actions.deletedSuccess]: (state, action) => {
    return state.filter((el) => el._id !== action.payload.idHabbit);
  },
  [actions.updSuccess]: (state, action) => {
    console.log('action.payload ', action.payload);
    return state.map((el) =>
      el._id === action.payload.changeId ? (el = action.payload.data) : el,
    );
  },
});

export default habbitsReducer;

// Для редюсера loader:
// [actions.getAllHabbitsRequest]:()=>true,
// [actions.updRequest]:()=>true,
// [actions.deletedRequest] :()=>true,
// [actions.deletedRequest]:()=>true,
// [actions.getAllSuccess]: ()=>false,
// [actions.updateCheckedSuccess]: ()=>false,
// [actions.deletedSuccess]: ()=>false,
// [actions.updSuccess]: ()=>false,
// [actions.getAllHabbitsError]:()=>false,
// [actions.updError]:()=>false,
// [actions.deletedError] :()=>false,
// [actions.updateCheckedError] :()=>false,

//  Для редюсера error
// [actions.getAllHabbitsError] : (state, action) => action.payload,
// [actions.updError] : (state, action) => action.payload,
// [actions.deletedError] : (state, action) => action.payload,
// [actions.updateCheckedError] : (state, action) => action.payload,
// [actions.getAllSuccess]: ()=>null,
// [actions.updateCheckedSuccess]: ()=>null,
// [actions.deletedSuccess]: ()=>null,
// [actions.updSuccess]: ()=>null,
