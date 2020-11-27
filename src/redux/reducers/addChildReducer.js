import addChildActions from '../../components/AddChildForm/AddChildActions';
import { createReducer } from '@reduxjs/toolkit';

const fakeChildrens = [
  // Заглушка
  {
    _id:'5fb7ac03930dc826c4b85a32',
    name: 'Эдик',
    gender: 'male',
    balance: 13,
    tasks: [{ name: 'Помыть посуду', cost: 5 }],
  },
  {
    _id:'5fb7bf6baa3bd05d1b31c2f4',
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
