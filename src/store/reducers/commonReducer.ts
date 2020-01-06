import * as common from '../actions/commonActions'
import { produce } from 'immer';

const initialState = {
  confirmModal: {
    isOpen: false,
    title: '',
    contents: ''
  }
}

export const reducer = (state = initialState, action: common.ActionType) => {
  switch (action.type) {
    case common.GO_TO_URL:
      return {
        ...state,
        payload: action.payload
      }
    case common.OPEN_CONFIRM_MODAL:
      return produce(state, draft => {
        draft.confirmModal.isOpen = true;
        draft.confirmModal.title = action.payload.title;
        draft.confirmModal.contents = action.payload.contents || '';
      })
    case common.CLOSE_CONFIRM_MODAL:
      return produce(state, draft => {
        draft.confirmModal.isOpen = false;
      })
    default:
      return state;
  }
}