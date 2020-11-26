import addChildActions from '../../components/AddChildForm/AddChildActions';
import { createReducer } from '@reduxjs/toolkit';

const fakeChildrens = [
  // Заглушка
  {
    name: 'Эдик',
    gender: 'male',
    balance: 13,
    tasks: [{ name: 'Помыть посуду', cost: 5 }],
  },
  {
    name: 'Маша',
    gender: 'female',
    balance: 33,
    tasks: [
      { name: 'Помыть посуду', cost: 7 },
      { name: 'Помыть посуду', cost: 13 },
    ],
  },
];

const childrens = createReducer(fakeChildrens, {
  [addChildActions.addChildSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
});

//const token = createReducer({ accessToken: '' }, {}); //заглушка, сюда вставлять accessToken

export default {
  childrens,
  //token,
};
