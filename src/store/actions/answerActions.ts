export const CHALLENGE_QUIZ = 'CHALLENGE_QUIZ' as const;
export const OPEN_ANSWER_MODAL = 'OPEN_ANSWER_MODAL' as const;
export const CLOSE_ANSWER_MODAL = 'CLOSE_ANSWER_MODAL' as const;

export const UPDATE_ANSWERSHEET = 'UPDATE_ANSWERSHEET' as const;

export const REQ_ANSWER = 'REQ_ANSWER' as const;
export const REQ_ANSWER_SUCCESS = 'REQ_ANSWER_SUCCESS' as const;
export const REQ_ANSWER_FAIL = 'REQ_ANSWER_FAIL' as const;

export interface ChallengeQuizPayload {
  quizId: number;
  answerSheet?: string;
}

export interface AnswerFormPayload {
  key: string;
  value: string;
}

export interface AnswerModalPayload {
  quizId: number;
  question: string;
  questionTypeName: string;
  items: string;
}

export interface ActionType {
  type: string;
  payload: ChallengeQuizPayload & AnswerModalPayload & AnswerFormPayload;
  data?: any;
  error?: any;
}

export function challengeQuiz(payload: ChallengeQuizPayload) {
  return {
    type: CHALLENGE_QUIZ,
    payload
  }
}
export function openAnswerModal(payload: AnswerModalPayload) {
  return {
    type: OPEN_ANSWER_MODAL,
    payload
  }
}
export function closeAnswerModal() {
  return {
    type: CLOSE_ANSWER_MODAL,
  }
}
export function updateAnswerSheet(payload: AnswerFormPayload){
  return {
    type: UPDATE_ANSWERSHEET,
    payload
  }
}
export function reqAnswer(payload: ChallengeQuizPayload){
  return {
    type: REQ_ANSWER,
    payload
  }
}
export function reqAnswerSuccess(data: any){
  return {
    type: REQ_ANSWER_SUCCESS,
    data
  }
}
export function reqAnswerFail(error: any){
  return {
    type: REQ_ANSWER_FAIL,
    error
  }
}