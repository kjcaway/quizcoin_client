export const CHALLENGE_QUIZ = 'CHALLENGE_QUIZ' as const;
export const OPEN_ANSWER_MODAL = 'OPEN_ANSWER_MODAL' as const;
export const CLOSE_ANSWER_MODAL = 'CLOSE_ANSWER_MODAL' as const;

export interface ChallengeQuizPayload {
  quizId: number;
}

export interface AnswerModalPayload {
  quizId: number;
  question: string;
  questionTypeName: string;
  items: string;
}

export interface ActionType {
  type: string;
  payload: ChallengeQuizPayload & AnswerModalPayload;
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