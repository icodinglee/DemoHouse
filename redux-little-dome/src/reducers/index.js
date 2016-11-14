import { combineReducers } from 'redux';

import numberReducer from './numberInfo';
import ageReducer from './ageInfo';

const rootReducer = combineReducers({
  num: numberReducer,
  age: ageReducer
});

export default rootReducer;
