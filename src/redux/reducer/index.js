import {combineReducers} from 'redux';
import authReducer from './authReducer';
import globalReducer from './globalReducer';
import requestReducer from './requestReducer';

const reducer = combineReducers({
  authReducer,
  globalReducer,
  requestReducer
});

export default reducer;