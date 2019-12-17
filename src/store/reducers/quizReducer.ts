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
  multiChecked: '',
  quizList: []
}

export const reducer = (state = initialState, action: quiz.ActionType) => {
  switch (action.type) {
    case quiz.CREATE_QUIZ:
      return {
        ...state,
        payload: action.payload
      }
    case quiz.CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        modalOpen: false
      }
    case quiz.CREATE_QUIZ_FAIL:
      return {
        ...state,
      }
    case quiz.UPDATE_INPUT:
      const { key, value } = action.payload;
      return produce(state, draft => {
        draft[key] = value;
      })
    case quiz.INIT_INPUT:
      return {
        ...initialState,
        modalOpen: true
      }
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
    case quiz.GET_QUIZ_LIST:
      return {
        ...state,
        payload: action.payload
      }
    case quiz.GET_QUIZ_LIST_SUCCESS:
      return produce(state, draft => {
        draft.quizList = action.data
      })
    case quiz.GET_QUIZ_LIST_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}