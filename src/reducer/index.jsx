import { combineReducers } from 'redux';
import AuthReducer from '../components/Authentication/modules/reducer';

export default combineReducers({
  authReducer: AuthReducer,
});
