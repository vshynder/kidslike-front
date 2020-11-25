import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';
import addChildReducer from './addChildReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  auth: addChildReducer.token, // Заглушка
  dummyReducerAllHabbits, // Для тестирования логику нужно переиспользовать
});

export default rootReducer;
