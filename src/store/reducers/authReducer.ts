import * as auth from '../actions/authActions'

const initialState = {
  status: 'INIT'
}

export const reducer = (state=initialState, action: auth.SignInAction) => {
  switch(action.type){
    case auth.SIGNIN:
      return {
        ...state,
        status: 'WAIT',
        payload: action.payload
      }
    case auth.SIGNIN_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: action.data
      }
    case auth.SIGNIN_FAIL:
      return {
        ...state,
        status: 'FAIL',
        error: action.error
      }
    default:
      return state;
  }
}