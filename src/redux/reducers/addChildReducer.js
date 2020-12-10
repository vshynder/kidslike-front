import addChildActions from '../../components/AddChildForm/AddChildActions';
import getChildrensActions from '../actions/getAllChildrens';
import { createReducer } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import allHabbitsAction from '../actions/allHabbitsAction';
import presentAction from '../actions/presentAction';

const childrens = createReducer([], {
  [addChildActions.addChildSuccess]: (state, action) => [
    ...state,
    { ...action.payload, _id: action.payload.id },
  ],

  [getChildrensActions.getAllChildrensSuccess]: (state, action) =>
    (state = action.payload),

  [allHabbitsAction.updateCheckedSuccess]: (state, action) => {
    state.map((child) => {
      let x = child.habbits.find((hab) => hab._id === action.payload.idHabbit);

      if (x && x.priceHabbit) {
        if (action.payload.confirmed) {
          child.stars = Number(child.stars) + x.priceHabbit;
        }

        if (action.payload.bonus) {
          child.stars = Number(child.stars) + x.priceHabbit * 10 * 0.5;
        }
      }
    });
  },

  [allHabbitsAction.addHabitSuccess]: (state, action) => {
    state.map((child) => {
      if (child._id === action.payload.idChild) {
        child.habbits.push(action.payload);
      }
    });
  },

  [allHabbitsAction.updSuccess]: (state, action) => {
    state.map((child) => {
      // child.habbits.filter((hab) => hab._id !== action.payload.changeId); // ??? Не отрабатывает
      let habbitForDel = child.habbits.find(
        (hab) => hab._id === action.payload.changeId,
      );
      if (habbitForDel) {
        let idx = child.habbits.indexOf(habbitForDel);

        child.habbits.splice(idx, 1);
      }
      child.habbits.map((e) => console.log(1, e.nameHabbit));
      if (child._id === action.payload.data.idChild) {
        child.habbits.push(action.payload.data);
      }
    });
  },
  [presentAction.buyPresentSuccess]: (state, action) => {
    state.map((child) => {
      if (child._id === action.payload.childId) {
        return (child.stars =
          child.stars > action.payload.newReward
            ? Number(child.stars) - action.payload.newReward
            : child.stars);
      }
    });
  },
});

export default {
  childrens,
};
