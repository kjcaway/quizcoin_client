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
  },
  addTagModalOpen: false,
  preLoadImageBase64 : '',
  preLoadImageFile : null,
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
    case user.ADD_TAG_MODAL_OPEN:
      return {
        ...state,
        addTagModalOpen: true
      }
    case user.ADD_TAG_MODAL_CLOSE:
      return {
        ...state,
        addTagModalOpen: false
      }
    case user.SET_TAG:
      return {
        ...state,
      }
    case user.SET_TAG_SUCCESS:
      return produce(state, draft => {
        draft.data.tags.push(_.get(action, 'data', ''))
      })
    case user.DEL_TAG:
      return {
        ...state,
      }
    case user.DEL_TAG_SUCCESS:
      return produce(state, draft => {
        draft.data.tags = draft.data.tags.filter((str: string) => str !== _.get(action, 'data', ''))
      })
    case user.PROFILE_PRELOAD:
      return produce(state, draft => {
        draft.preLoadImageBase64 = _.get(action, 'payload', '')
      })
    case user.PROFILE_PRELOAD_FILE:
      return produce(state, draft => {
        draft.preLoadImageFile = _.get(action, 'payload', null)
      })
    case user.INIT_PROFILE_FILE:
      return produce(state, draft => {
        draft.preLoadImageFile = null
        draft.preLoadImageBase64 = ''
      })
    case user.SET_USER_PROFILE:
      return {
        ...state,
      }
    case user.SET_USER_PROFILE_SUCCESS:
      return produce(state, draft => {
        draft.preLoadImageFile = null
      })
    default:
      return state
  }
}