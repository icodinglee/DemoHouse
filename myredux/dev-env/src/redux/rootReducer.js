import { combineReducers } from 'redux';
import MyNumberReducer from './reducers/number';

export default combineReducers({
  MyNumber:MyNumberReducer
});
