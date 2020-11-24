import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import addChildReducer from './addChildReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  auth: addChildReducer.token, // Заглушка
});

export default rootReducer;
