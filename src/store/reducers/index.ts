import { combineReducers } from 'redux';
import {reducer as auth} from './authReducer';
import {reducer as alertMsg} from './alertMsgReducer';


const rootReducer = combineReducers({
  auth,
  alertMsg
})

export default rootReducer