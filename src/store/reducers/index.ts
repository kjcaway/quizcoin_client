import { combineReducers } from 'redux';
import { reducer as auth } from './authReducer';
import { reducer as alertMsg } from './alertMsgReducer';
import { reducer as user } from './userReducer';
import { reducer as main } from './mainReducer';


const rootReducer = combineReducers({
  auth,
  alertMsg,
  user,
  main
})

export default rootReducer