import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

const initialState = [
  {
    sprintHabbit: '++++-11111',
    _id: '5fbad10a4e5958241c581f31',
    idChild: '5fb7ac03930dc826c4b85a32',
    nameHabbit: 'Music Listen',
    priceHabbit: 3,
    ownerHabbits: 'CVF',
    genderChild: 'male',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbbd226c8f55226980252eb',
    idChild: '5fb7ac03930dc826c4b85a32',
    nameHabbit: 'Dynamo K',
    priceHabbit: 3,
    ownerHabbits: 'CVF',
    genderChild: 'male',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbac96cefb21b2698e84a9c',
    nameHabbit: 'RelaxSuper',
    priceHabbit: 44,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbfeffdd990eb2fa898f218',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'QAZ',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
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
    _id: '5fbff008d990eb2fa898f21a',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'WEDCSX',
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
    _id: '5fbff01cd990eb2fa898f21c',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'CVFGR',
    priceHabbit: 3,
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
});
