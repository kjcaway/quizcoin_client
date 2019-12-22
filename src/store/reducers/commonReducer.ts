import * as common from '../actions/commonActions'

const initialState = {
  nowUrl : ''
}

export const reducer = (state = initialState, action: common.ActionType) => {
  switch (action.type) {
    case common.GO_TO_URL:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state;
  }
}