import { createReducer } from '@reduxjs/toolkit';
import getAllPresentsAction from '../actions/allPresentsAction';

const fakePresents = [
  //Заглушка
  {
    id: 1,
    gender: 'male',
    mainImage: '',
    name: 'Ночівля у подруги',
    cost: 17,
  },
  {
    id: 2,
    gender: 'female',
    mainImage: 'https://www.gastronom.ru/binfiles/images/20191113/bd570867.jpg',
    name: 'Піца',
    cost: 30,
  },
  {
    id: 3,
    gender: 'male',
    mainImage:
      'https://pm1.narvii.com/6816/a4a78d7c2c3252db00c93ea79b2dbe16d2d31577v2_00.jpg',
    name: 'Похід у кіно',
    cost: 25,
  },
];

const getPresents = createReducer(fakePresents, {
  // Нужно дописать операцию к этому редюсьеру
  [getAllPresentsAction.getAllPresentsSuccess]: (state, _) => state,
});

export default {
  getPresents,
};
