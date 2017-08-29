import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import menuReducer from './menuReducer';

export default combineReducers({
  order: orderReducer,
  menu: menuReducer
});