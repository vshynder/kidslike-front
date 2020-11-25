import { combineReducers } from 'redux';

import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  dummyReducerAllHabbits,
});

export default rootReducer;

// checkHabbits
// dummyReducerAllHabbits
