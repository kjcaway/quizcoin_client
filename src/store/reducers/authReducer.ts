import * as auth from '../actions/authActions'
import _ from 'lodash';

const initialState = {
  isCheckingToken: true,
  isLogged: false,
  userId: ''
}

export const reducer = (state = initialState, action: auth.ActionType) => {
  switch (action.type) {
    case auth.REQ_SIGNIN:
      return {
        ...state,
        payload: action.payload
      }
    case auth.REQ_SIGNIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: _.get(action, 'data.userId', '')
      }
    case auth.REQ_SIGNIN_FAIL:
      return {
        ...state,
        isLogged: false,
        error: action.error
      }
    case auth.TEMP_LOGIN:
      return {
        ...state,
        isLogged: true,
      }
    case auth.LOGOUT:
      return {
        ...state,
        isLogged: false,
        userId: ''
      }
    case auth.REQ_SIGNUP:
      return {
        ...state,
        payload: action.payload
      }
    case auth.REQ_SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case auth.REQ_SIGNUP_FAIL:
      return {
        ...state,
        isLogged: false,
        error: action.error
      }
    case auth.REQ_CHECK_TOKEN:
      return {
        ...state,
        isCheckingToken: true
      }
    case auth.REQ_CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isCheckingToken: false,
        userId: _.get(action, 'data.tokenInfo.userId', '')
      }
    case auth.REQ_CHECK_TOKEN_FAIL:
      return {
        ...state,
        isLogged: false,
        isCheckingToken: false
      }
    default:
      return state;
  }
}