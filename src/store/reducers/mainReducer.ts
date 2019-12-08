import * as main from '../actions/mainActions';
import { produce } from 'immer';
import _ from 'lodash';

const initialState = {
  status : 'INIT',
  userList: []
}

export const reducer = (state = initialState, action: main.ActionType) => {
  switch (action.type) {
    case main.GET_USERS:
      return {
        ...state,
        status: 'LOADING',
        payload: action.payload
      }
    case main.GET_USERS_SUCCESS:
      return produce(state, draft => {
        draft.status = 'SUCCESS'
        draft.userList = action.data
      })
    case main.GET_USERS_FAIL:
      return {
        ...state,
        status: 'FAIL',
      }
    default:
      return state
  }
}