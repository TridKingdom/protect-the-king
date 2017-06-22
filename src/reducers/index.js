import { combineReducers } from 'redux';
import villagesReducer from './villagesReducer';

const rootReducer = combineReducers({
  villagesReducer,
});

export default rootReducer;