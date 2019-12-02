import { combineReducers } from 'redux';
import { reducer as auth } from './authReducer';
import { reducer as alertMsg } from './alertMsgReducer';
import { reducer as user } from './userReducer';


const rootReducer = combineReducers({
  auth,
  alertMsg,
  user
})

export default rootReducer