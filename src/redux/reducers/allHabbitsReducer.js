import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/allHabbitsAction';

export const habbitsReducer = createReducer([], {
  [actions.getAllSuccess]: (state, action) => {
    return (state = action.payload);
  },
<<<<<<< HEAD
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
  [action.addHabitSuccess]: (state, action) => {
    return [...state, action.payload]
  },

=======
>>>>>>> dev
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
