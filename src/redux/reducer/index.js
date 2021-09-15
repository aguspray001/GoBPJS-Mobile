import {combineReducers} from 'redux';
import authReducer from './authReducer';
import globalReducer from './globalReducer';
import requestReducer from './requestReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  authReducer,
  globalReducer,
  requestReducer,
  userReducer,
});

export default reducer;