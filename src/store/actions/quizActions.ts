export const REQ_CREATE_QUIZ = 'REQ_CREATE_QUIZ' as const;
export const REQ_CREATE_QUIZ_SUCCESS = 'REQ_CREATE_QUIZ_SUCCESS' as const;
export const REQ_CREATE_QUIZ_FAIL = 'REQ_CREATE_QUIZ_FAIL' as const;

export const UPDATE_INPUT = 'UPDATE_INPUT' as const;
export const ADD_QUIZ_ITEM = 'ADD_QUIZ_ITEM' as const;
export const DEL_QUIZ_ITEM = 'DEL_QUIZ_ITEM' as const;

export const OPEN_QUIZ_MODAL = 'OPEN_QUIZ_MODAL' as const;
export const CLOSE_QUIZ_MODAL = 'CLOSE_QUIZ_MODAL' as const;

export const REQ_GET_MY_QUIZ_LIST = 'REQ_GET_MY_QUIZ_LIST' as const;
export const REQ_GET_MY_QUIZ_LIST_SUCCESS = 'REQ_GET_MY_QUIZ_LIST_SUCCESS' as const;
export const REQ_GET_MY_QUIZ_LIST_FAIL = 'REQ_GET_MY_QUIZ_LIST_FAIL' as const;

export const REQ_DELETE_QUIZ = 'REQ_DELETE_QUIZ' as const;
export const REQ_DELETE_QUIZ_SUCCESS = 'REQ_DELETE_QUIZ_SUCCESS' as const;
export const REQ_DELETE_QUIZ_FAIL = 'REQ_DELETE_QUIZ_FAIL' as const;

export interface CreateQuizPayload {
  question: string;
  answer: string;
  questionType: number;
  multiAnswerItems: string[];
}

export interface CreateFormPayload {
  key: string;
  value: string;
}

export interface ReqDeleteQuizPayload {
  quizId: number;
}


export interface ActionType {
  type: string;
  payload: CreateQuizPayload & CreateFormPayload & ReqDeleteQuizPayload;
  data?: any;
  error?: any;
}

export function createQuiz(payload: CreateQuizPayload) {
  return {
    type: REQ_CREATE_QUIZ,
    payload
  }
}

export function createQuizSuccess(data: any) {
  return {
    type: REQ_CREATE_QUIZ_SUCCESS,
    data
  }
}

export function createQuizFail(error: any) {
  return {
    type: REQ_CREATE_QUIZ_FAIL,
    error
  }
}

export function updateInput(payload: CreateFormPayload) {
  return {
    type: UPDATE_INPUT,
    payload
  }
}

export function addQuizItem(payload: string) {
  return {
    type: ADD_QUIZ_ITEM,
    payload
  }
}

export function delQuizItem(payload: string) {
  return {
    type: DEL_QUIZ_ITEM,
    payload
  }
}

export function openQuizModal() {
  return {
    type: OPEN_QUIZ_MODAL,
  }
}
export function closeQuizModal() {
  return {
    type: CLOSE_QUIZ_MODAL,
  }
}

export function getMyQuizList() {
  return {
    type: REQ_GET_MY_QUIZ_LIST,
  }
}

export function getMyQuizListSuccess(data: any) {
  return {
    type: REQ_GET_MY_QUIZ_LIST_SUCCESS,
    data
  }
}

export function getMyQuizListFail(error: any) {
  return {
    type: REQ_GET_MY_QUIZ_LIST_FAIL,
    error
  }
}

export function reqDeleteQuiz(payload: ReqDeleteQuizPayload) {
  return {
    type: REQ_DELETE_QUIZ,
    payload
  }
}

export function reqDeleteQuizSuccess(data: any) {
  return {
    type: REQ_DELETE_QUIZ_SUCCESS,
    data
  }
}

export function reqDeleteQuizFail(error: any) {
  return {
    type: REQ_DELETE_QUIZ_FAIL,
    error
  }
}