import { createReducer, createAction } from '@reduxjs/toolkit';
import action from '../actions/index';

export const dummyReducerAllHabbits = (state = initialState, action) => {
  switch (action.type) {
    case 'check/habbit':
      // const updatedState = [...state];
      // updatedState[0].sprintHabbit = '++++111111';

      let updatedState = state.map((el) => {
        if (el._id === action.payload.idHabbit) {
          el.sprintHabbit = action.payload.newSprintHabbit;
          return el;
        }
        return el;
      });

      return updatedState;
    default:
      return state;
  }
};

const initialState = [
  {
    sprintHabbit: '1111111111',
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
    nameHabbit: 'Relax',
    priceHabbit: 754,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbacb885233e71d54b2f68b',
    nameHabbit: 'Fifa',
    priceHabbit: 55,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbace0767697121ec6857a1',
    nameHabbit: 'GTA5',
    priceHabbit: 8,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbacebc67697121ec6857a3',
    nameHabbit: 'Music2',
    priceHabbit: 8,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
  {
    sprintHabbit: '1111111111',
    _id: '5fbbd7558bcd602db4291673',
    nameHabbit: 'PS4',
    priceHabbit: 8,
    idChild: '5fb7c960558e331c400f46bb',
    ownerHabbits: 'Masha',
    genderChild: 'female',
  },
];

// export const dummyReducerAllHabbits = createReducer(initialState, {
//   [action.updateCheckedHabbit]: (state, action) => {
//     console.log();
//     console.log('state: ', ...state);
//     console.log('action: ', action.payload);
//     return state;
//   },
// });

// export const dummyReducerAllHabbits = createReducer(initialState, (builder) =>{
//   builder.addCase(action.updateCheckedHabbit, (state, action) => {
//     console.log('state: ', state);
//     console.log('action: ', action.payload);
//     // return state;
//     })})
