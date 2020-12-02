import { loaderReducer } from './laoderReducer';
import habbitsReducer from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import allPresentReducer from './allPresentReducer';
import AllTasksCurrentChild from './allTasksCurrentChild';
import { authReducer } from './authReducer';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import tasksReducer from './tasksReducer';
import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key:'auth',
  storage,
  whitelist:['accessToken','refreshToken']
}

export const store = configureStore({
  reducer:{
    loader: loaderReducer,
    childrens: addChildReducer.childrens,
    habbits: habbitsReducer, // Для тестирования, логику нужно переиспользовать
    presents: allPresentReducer.presents,
    tasks:tasksReducer.tasks,
    user: persistReducer(authPersistConfig,authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export const persistor = persistStore(store)
