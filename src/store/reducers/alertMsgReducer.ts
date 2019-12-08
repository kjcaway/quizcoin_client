import * as alertMsg from '../actions/alertMsgActions';

const initialState = {
  isOpen: false,
  message: '',
  category: ''
}

export const reducer = (state = initialState, action: alertMsg.AlertMessageAction) => {
  switch (action.type) {
    case alertMsg.PUSH_MESSAGE:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        category: action.payload.category,
      }
    case alertMsg.HIDE_MESSAGE:
      return {
        ...state,
        isOpen: false,
        message: '',
        category: '',
      }
    default:
      return state
  }
}