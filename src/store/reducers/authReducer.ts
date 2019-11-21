import * as auth from '../actions/authActions'

const initialState = {
  isLogged: false
}

export const reducer = (state=initialState, action: auth.SignInAction) => {
  switch(action.type){
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
    default:
      return state;
  }
}