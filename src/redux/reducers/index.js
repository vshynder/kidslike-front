import { combineReducers } from 'redux';

import { loaderReducer } from './laoderReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

export default rootReducer;
