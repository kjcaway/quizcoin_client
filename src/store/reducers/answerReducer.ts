import * as answer from '../actions/answerActions';
import { produce } from 'immer';

const initialState = {
  modalOpen: false,
  quizId : -1,
  question: '',
  questionTypeName: '',
  items: [] as string[]
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
    default:
      return state
  }
}