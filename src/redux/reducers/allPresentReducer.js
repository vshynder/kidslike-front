import { createReducer } from '@reduxjs/toolkit';
import presentAction from '../actions/presentAction';

// веременные подарки
const present = [
  {
    _id: '5fb51b0126db0d0eab59dac6',
    title: 'Car',
    image: '',
    childId: '5fb4d5e72d6d062db842e34f',
    bal: 5,
    dateCreated: '2020-11-18T13:00:49.574+00:00',
  },
  {
    _id: '5fb51b0126db0d0eab5asdf3',
    title: 'Dog',
    image: '',
    childId: '5fb4d5e72d6d062db842e34f',
    bal: 100,
    dateCreated: '2020-11-18T13:00:49.574+00:00',
  },
];

const getAllPresents = (state,action) =>{
  return (state = action.payload);
}

const newPresent = (state, action) => {
  return [...state, action.payload];
};

const removePresent = (state, action) => {
  return state.filter((idPresent) => idPresent._id !== action.payload);
};

const updatePresent = (state, action) => {
  return [...state.map((el) => el._id === action.payload._id 
        ? (el = action.payload) 
        : el 
  )]
};

const presents = createReducer(null, {
  [presentAction.addPresentSuccess]: newPresent,
  [presentAction.removePresentSuccess]: removePresent,
  [presentAction.updatePresentSuccess]: updatePresent,
  [presentAction.getAllPresentSuccess]: getAllPresents,
});

export default {
  presents,
};
