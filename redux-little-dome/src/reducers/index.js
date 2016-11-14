import { combineReducers } from 'redux';

import numberReducer from './numberInfo';
import ageReducer from './ageInfo';
import bioReducer from './bioInfo';

const rootReducer = combineReducers({
  num: numberReducer,
  age: ageReducer,
  bio: bioReducer
});

export default rootReducer;
