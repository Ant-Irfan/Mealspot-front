import { combineReducers } from 'redux';
import AuthReducer from '../components/Authentication/modules/reducer';
import ProgressReducer from '../components/Progress/modules/reducer';
import AdminReducer from '../components/AdminPanel/modules/reducer';

export default combineReducers({
  authReducer: AuthReducer,
  adminReducer: AdminReducer,
  progressReducer: ProgressReducer,
});
