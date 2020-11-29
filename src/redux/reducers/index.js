import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import getAllPresents from './allPresentReducer';
import taskReducer from './taskReducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  task: taskReducer,
  //auth: addChildReducer.token, // Заглушка
  dummyReducerAllHabbits, // Для тестирования, логику нужно переиспользовать
  presents: getAllPresents,
});

export default rootReducer;
