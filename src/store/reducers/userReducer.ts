import * as user from '../actions/userActions';
import produce from 'immer';
import _ from 'lodash';

const initialState = {
  data: {
    user_id: '',
    name: '',
    created_time: '',
    profile: '',
    score: -1,
    popular: -1,
    quizcnt: -1,
    tags: [] as string[]
  }
}

export const reducer = (state = initialState, action: user.ActionType) => {
  switch (action.type) {
    case user.GET_USER_INFO:
      return {
        ...state,
        payload: action.payload
      }
    case user.GET_USER_INFO_SUCCESS:
      return produce(state, draft => {

        draft.data.user_id = _.get(action, 'data.user_id', '');
        draft.data.name = _.get(action, 'data.name', '');
        draft.data.created_time = _.get(action, 'data.created_time', '');
        draft.data.profile = _.get(action, 'data.profile', '');
        draft.data.score = _.get(action, 'data.score', -1);
        draft.data.popular = _.get(action, 'data.popular', -1);
        draft.data.quizcnt = _.get(action, 'data.quizcnt', -1);
        draft.data.tags = _.get(action, 'data.tags', '').split(',').filter((str: string) => str !== '')
      })
    case user.GET_USER_INFO_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}