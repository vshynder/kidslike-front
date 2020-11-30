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
<<<<<<< HEAD
  dummyReducerAllHabbits, // Для тестирования, логику нужно переиспользовать
  presents: allPresentReducer.presents,
  user: authReducer,
=======
  // auth: addChildReducer.token, // Заглушка
  dummyReducerAllHabbits, // Для тестирования, логику нужно переиспользовать
  presents: getAllPresents,
  user: authReducer
>>>>>>> 52067e97fcf670ccdd91822d46d2839f12ccb15e
});

export default rootReducer;
