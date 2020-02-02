import * as answer from '../actions/answerActions';
import { produce } from 'immer';

interface State {
  [key: string]: any
}

const initialState: State = {
  modalOpen: false,
  quizId: -1,
  question: '',
  questionTypeName: '',
  items: [] as string[],
  answerSheet: '',
  result: {
    modalOpen: false,
    message: '',
    isSuccess: false,
    tryCnt: -1,
    gettingScore: -1
  }
}

export const reducer = (state = initialState, action: answer.ActionType) => {
  switch (action.type) {
    case answer.CHALLENGE_QUIZ:
      return {
        ...state,
        quizId: action.payload.quizId
      }
    case answer.OPEN_ANSWER_MODAL:
      return produce(state, draft => {
        draft.modalOpen = true;
        draft.quizId = action.payload.quizId;
        draft.question = action.payload.question;
        draft.questionTypeName = action.payload.questionTypeName;
        draft.items = action.payload.items.split(',').filter((str: string) => str !== '');
      })
    case answer.CLOSE_ANSWER_MODAL:
      return initialState
    case answer.UPDATE_ANSWERSHEET:
      const { key, value } = action.payload;
      return produce(state, draft => {
        draft[key] = value;
      })
    case answer.REQ_ANSWER:
      return {
        ...state,
      }
    case answer.REQ_ANSWER_SUCCESS:
      return initialState
    case answer.REQ_ANSWER_FAIL:
      return {
        ...state,
      }
    case answer.OPEN_RESULT_MODAL:
      return produce(state, draft => {
        draft.result.modalOpen = true;
        draft.result.message = action.payload.message;
        draft.result.isSuccess = action.payload.isSuccess;
        draft.result.tryCnt = action.payload.tryCnt;
        draft.result.gettingScore = action.payload.gettingScore;
      })
    case answer.CLOSE_RESULT_MODAL:
      return produce(state, draft => {
        draft.result = initialState.result;
      })
    default:
      return state
  }
}