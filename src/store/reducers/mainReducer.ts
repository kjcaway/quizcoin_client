import * as main from '../actions/mainActions';
import { produce } from 'immer';
import { defaultToProfile } from '../../lib/utils';

const initialState = {
  status: 'INIT',
  userList: [],
  quizList: []
}

export const reducer = (state = initialState, action: main.ActionType) => {
  switch (action.type) {
    case main.REQ_GET_USERS:
      return {
        ...state,
        status: 'LOADING',
        payload: action.payload
      }
    case main.REQ_GET_USERS_SUCCESS:
      return produce(state, draft => {
        let userList = action.data;
        userList.forEach((user: any) => {
          user.userId = user.user_id;
          user.tags = user.tags.split(',').filter((str: string) => str !== '');
          user.profile = defaultToProfile(user.profile)
        });
        draft.status = 'SUCCESS'
        draft.userList = userList.filter((user: any) => user.quizcnt > 0)
      })
    case main.REQ_GET_USERS_FAIL:
      return {
        ...state,
        status: 'FAIL',
      }
    case main.REQ_GET_QUIZ_LIST:
      return {
        ...state,
        payload: action.payload
      }
    case main.REQ_GET_QUIZ_LIST_SUCCESS:
      return produce(state, draft => {
        const quizList = action.data;
        quizList.forEach((quiz: any) => {
          quiz.items = quiz.items.split(',').filter((str: string) => str !== '');
        });
        draft.status = 'SUCCESS'
        draft.quizList = quizList
      })
    case main.REQ_GET_QUIZ_LIST_FAIL:
      return {
        ...state,
        status: 'FAIL',
      }
    case main.UPDATE_COMPLETED_STATUS:
      return produce(state, draft => {
        const { quizId, isCompleted } = action.payload;
        draft.quizList.forEach((quiz: any) => {
          if (quiz.quiz_id === quizId) {
            quiz.isCompleted = isCompleted;
          }
        });
      })
    default:
      return state
  }
}