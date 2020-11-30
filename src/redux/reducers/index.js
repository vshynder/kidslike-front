import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import allPresentReducer from './allPresentReducer';
import { authReducer } from './authReducer';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  dummyReducerAllHabbits, // Для тестирования, логику нужно переиспользовать
  presents: allPresentReducer.presents,
  user: authReducer,
});

export default rootReducer;
