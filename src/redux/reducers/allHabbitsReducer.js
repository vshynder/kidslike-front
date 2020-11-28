import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

// initialState ДЛЯ ТЕСТИРОВАНИЯ (/api/habbits/getallhabbitsuser)
const initialState = [
  {
    sprintHabbit: '1111111111',
    _id: '5fbff003d990eb2fa898f219',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'WSX',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbff016d990eb2fa898f21b',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'QWSX',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fc1008aba89e833a834665f',
    nameHabbit: 'DynMOddrew',
    priceHabbit: 11,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
];

export const dummyReducerAllHabbits = createReducer(initialState, {
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
// Для редюсеров loader и error:
// [actions.updError]:()=>{},
// [actions.updRequest]:()=>{},
// [actions.deletedError] :()=>{},
// [actions.deletedRequest] :()=>{},
// [actions.updateCheckedError] :()=>{},
// [actions.deletedRequest]:()=>{},
