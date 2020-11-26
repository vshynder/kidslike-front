import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

const initialState = [
  {
    sprintHabbit: '+++-+11111',
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
    _id: '5fbfa76663ca7530b4aa09bd',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'TTT',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbfa76a63ca7530b4aa09be',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'NNN',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbfa76e63ca7530b4aa09bf',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'eret',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbfa77363ca7530b4aa09c0',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'ererw',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbfa77663ca7530b4aa09c1',
    idChild: '5fb7c960558e331c400f46bb',
    nameHabbit: 'nnnn',
    priceHabbit: 3,
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
];

export const dummyReducerAllHabbits = createReducer(initialState, {
  [actions.updateCheckedSuccess]: (state, action) => {
    state.map((el) => {
      if (el._id === action.payload.idHabbit) {
        el.sprintHabbit = action.payload.newSprintHabbit;
        return el;
      }
      return el;
    });
  },

  [actions.deletedSuccess]: (state, action) => {
    return state.filter((el) => el._id !== action.payload.idHabbit);
  },
});
