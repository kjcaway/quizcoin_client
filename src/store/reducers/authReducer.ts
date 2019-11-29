import * as auth from '../actions/authActions'

const initialState = {
  isLogged: false
}

export const reducer = (state = initialState, action: auth.ActionType) => {
  switch (action.type) {
    case auth.SIGNIN:
      return {
        ...state,
        payload: action.payload
      }
    case auth.SIGNIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: action.data
      }
    case auth.SIGNIN_FAIL:
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
      }
    case auth.SIGNUP:
      return {
        ...state,
        payload: action.payload
      }
    case auth.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case auth.SIGNUP_FAIL:
      return {
        ...state,
        isLogged: false,
        error: action.error
      }
    case auth.CHECK_TOKEN:
      return {
        ...state,
      }
    case auth.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        isLogged: true
      }
    case auth.CHECK_TOKEN_FAIL:
      return {
        ...state,
        isLogged: false,
      }
    default:
      return state;
  }
}