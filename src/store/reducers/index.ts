import { combineReducers } from 'redux';
import {reducer as auth} from './authReducer';


const rootReducer = combineReducers({
  auth,
})

export default rootReducer