import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
<<<<<<< HEAD
import { dummyReducerAllHabbits } from './allHabbitsReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  dummyReducerAllHabbits,
=======
import addChildReducer from './addChildReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  auth: addChildReducer.token, // Заглушка
>>>>>>> dev
});

export default rootReducer;

// checkHabbits
// dummyReducerAllHabbits
