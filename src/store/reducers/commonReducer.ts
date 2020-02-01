import * as common from '../actions/commonActions'
import { produce } from 'immer';

const initialState = {
  confirmModal: {
    isOpen: false,
    title: '',
    contents: ''
  },
  menus: [
    {
      name: '출제자들',
      path: '/',
      isActive: false
    },
    {
      name: '최근퀴즈',
      path: '/latest',
      isActive: false
    },
    {
      name: '나의점수',
      path: '/mypage',
      isActive: false
    },
  ]
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
    case common.CHANGE_ACTIVE_MENU:
      return produce(state, draft => {
        draft.menus.forEach((menu: any) => {
          const nowUrlFirst = action.payload.split("/")[1];
          const menuUrlFirst = menu.path.split("/")[1];
          if(nowUrlFirst === menuUrlFirst) {
            menu.isActive = true;
          } else{
            menu.isActive = false;
          }
        })
      })
    default:
      return state;
  }
}