import * as main from '../actions/mainActions';
import { produce } from 'immer';
import {defaultToProfile} from '../../lib/utils';

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
        let userList = action.data;
        userList.forEach((user: any) => {
          user.userId = user.user_id;
          user.tags = user.tags.split(',').filter((str: string) => str !== '');
          user.profile = defaultToProfile(user.profile)
        });
        draft.status = 'SUCCESS'
        draft.userList = userList.filter((user:any) => user.quizcnt > 0)
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