import { combineReducers } from 'redux';
import { reducer as auth } from './authReducer';
import { reducer as alertMsg } from './alertMsgReducer';
import { reducer as user } from './userReducer';
import { reducer as main } from './mainReducer';
import { reducer as quiz } from './quizReducer';
import { reducer as common } from './commonReducer';


const rootReducer = combineReducers({
  auth,
  alertMsg,
  user,
  main,
  quiz,
  common
})

export default rootReducer