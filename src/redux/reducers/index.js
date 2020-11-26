import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import getAllPresents from './allPresentsReducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  presents: getAllPresents.getPresents,
  //auth: addChildReducer.token, // Заглушка
  dummyReducerAllHabbits, // Для тестирования логику нужно переиспользовать
});

export default rootReducer;
