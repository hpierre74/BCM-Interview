/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
//import app from './modules/App/AppReducer';
import orders from './modules/Post/PostReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  //app,
  orders
});
