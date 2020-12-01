import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import habbitsReducer from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import allPresentReducer from './allPresentReducer';
import AllTasksCurrentChild from './allTasksCurrentChild';
import { authReducer } from './authReducer';
import { persistReducer } from 'redux-persist';
import tasksReducer from './tasksReducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  currentChildTasks: AllTasksCurrentChild.allTasksCurrentChild,
  habbits: habbitsReducer, // Для тестирования, логику нужно переиспользовать
  presents: allPresentReducer.presents,
  tasks:tasksReducer.tasks,
  user: authReducer,
});

export default rootReducer;
