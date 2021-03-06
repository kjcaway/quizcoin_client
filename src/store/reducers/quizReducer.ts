import * as quiz from '../actions/quizActions';
import { produce } from 'immer';
import _ from 'lodash';

interface State {
  [key: string]: any
}

const initialState: State = {
  question: '',
  answer: '',
  questionType: 1,
  modalOpen: false,
  multiAnswerSheet: '',
  multiAnswerItems: [],
  quizList: [] // 나의 퀴즈 리스트
}

export const reducer = (state = initialState, action: quiz.ActionType) => {
  switch (action.type) {
    case quiz.REQ_CREATE_QUIZ:
      return {
        ...state,
        payload: action.payload
      }
    case quiz.REQ_CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        modalOpen: false
      }
    case quiz.REQ_CREATE_QUIZ_FAIL:
      return {
        ...state,
      }
    case quiz.UPDATE_INPUT:
      const { key, value } = action.payload;
      return produce(state, draft => {
        draft[key] = value;
      })
    case quiz.ADD_QUIZ_ITEM:
      return produce(state, draft => {
        draft.multiAnswerItems.push(action.payload);
        draft.multiAnswerSheet = '';
      })
    case quiz.DEL_QUIZ_ITEM:
      return produce(state, draft => {
        draft.multiAnswerItems.splice(
          draft.multiAnswerItems.findIndex((value: string) => value === _.get(action, 'payload', '')),
          1
        );
        draft.anwser = '';
      })
    case quiz.OPEN_QUIZ_MODAL:
      return {
        ...state,
        modalOpen: true
      }
    case quiz.CLOSE_QUIZ_MODAL:
      return initialState;
    case quiz.REQ_GET_MY_QUIZ_LIST:
      return {
        ...state,
      }
    case quiz.REQ_GET_MY_QUIZ_LIST_SUCCESS:
      return produce(state, draft => {
        draft.quizList = action.data
      })
    case quiz.REQ_GET_MY_QUIZ_LIST_FAIL:
      return {
        ...state,
      }
    case quiz.REQ_DELETE_QUIZ:
      return {
        ...state,
        payload: action.payload
      }
    case quiz.REQ_DELETE_QUIZ_SUCCESS:
      return produce(state, draft => {
        draft.quizList.splice(
          draft.quizList.findIndex((value: any) => value.quiz_id === _.get(action, 'data.quizId', '')),
          1
        );
      })
    case quiz.REQ_DELETE_QUIZ_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}