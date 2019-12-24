export const CREATE_QUIZ = 'CREATE_QUIZ' as const;
export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS' as const
export const CREATE_QUIZ_FAIL = 'CREATE_QUIZ_FAIL' as const
export const UPDATE_INPUT = 'UPDATE_INPUT' as const;
export const INIT_INPUT = 'INIT_INPUT' as const;
export const ADD_QUIZ_ITEM = 'ADD_QUIZ_ITEM' as const;
export const DEL_QUIZ_ITEM = 'DEL_QUIZ_ITEM' as const;

export const OPEN_QUIZ_MODAL = 'OPEN_QUIZ_MODAL' as const;
export const CLOSE_QUIZ_MODAL = 'CLOSE_QUIZ_MODAL' as const;

export const GET_MY_QUIZ_LIST = 'GET_MY_QUIZ_LIST' as const;
export const GET_MY_QUIZ_LIST_SUCCESS = 'GET_MY_QUIZ_LIST_SUCCESS' as const;
export const GET_MY_QUIZ_LIST_FAIL = 'GET_MY_QUIZ_LIST_FAIL' as const;

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


export interface ActionType {
  type: string;
  payload: CreateQuizPayload & CreateFormPayload ;
  data?: any;
  error?: any;
}

export function createQuiz(payload: CreateQuizPayload) {
  return {
    type: CREATE_QUIZ,
    payload
  }
}

export function createQuizSuccess(data: any) {
  return {
    type: CREATE_QUIZ_SUCCESS,
    data
  }
}

export function createQuizFail(error: any) {
  return {
    type: CREATE_QUIZ_FAIL,
    error
  }
}

export function updateInput(payload: CreateFormPayload) {
  return {
    type: UPDATE_INPUT,
    payload
  }
}

export function initInput() {
  return {
    type: INIT_INPUT,
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
    type: GET_MY_QUIZ_LIST,
  }
}

export function getMyQuizListSuccess(data: any) {
  return {
    type: GET_MY_QUIZ_LIST_SUCCESS,
    data
  }
}

export function getMyQuizListFail(error: any) {
  return {
    type: GET_MY_QUIZ_LIST_FAIL,
    error
  }
}
