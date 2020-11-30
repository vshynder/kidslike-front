import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import habbitsReducer from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import getAllPresents from './allPresentReducer';
import { authReducer } from './authReducer';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  // auth: addChildReducer.token, // Заглушка
  habbitsReducer, // Для тестирования, логику нужно переиспользовать
  presents: getAllPresents,
  user: authReducer,
});

export default rootReducer;
