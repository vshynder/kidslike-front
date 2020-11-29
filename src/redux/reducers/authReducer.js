import { combineReducers } from 'redux';

// const token = (state = null, { type, payload }) => {
//     switch (type) {
//       case 'auth/REGISTER_SUCCESS':
//         return payload.response.token;
  
//       case 'SET_TOKEN_IN_STORE':
//         return payload.token;
  
//       default:
//         return state;
//     }
//   };

  const error = (state = null, { type, payload }) => {
    switch (type) {
      case 'auth/REGISTER_ERROR':
        return payload.error;
      default:
        return state;
    }
  };

  const isAuth = (state = false, { type }) => {
    switch (type) {
      case 'auth/REGISTER_SUCCESS':
        return true;
  
      default:
        return state;
    }
  };

  export default combineReducers({
    // token,
    error,
    isAuth,
  });
  