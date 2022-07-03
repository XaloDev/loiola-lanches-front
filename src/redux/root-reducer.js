import { combineReducers } from 'redux';
import utils from './utils/reducer'
import orders from './orders/reducer'

export default combineReducers({
  utils,
  orders
});
