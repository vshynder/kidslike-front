import { combineReducers } from 'redux';

import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits, checkHabbits } from './habbitReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  dummyReducerAllHabbits,
});

export default rootReducer;

// checkHabbits
// dummyReducerAllHabbits
