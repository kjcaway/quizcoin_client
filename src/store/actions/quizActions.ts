export const CREATE_QUIZ = 'CREATE_QUIZ';
export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS'
export const CREATE_QUIZ_FAIL = 'CREATE_QUIZ_FAIL'
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const INIT_INPUT = 'INIT_INPUT';
export const ADD_QUIZ_ITEM = 'ADD_QUIZ_ITEM';
export const DEL_QUIZ_ITEM = 'DEL_QUIZ_ITEM';

export const OPEN_QUIZ_MODAL = 'OPEN_QUIZ_MODAL';
export const CLOSE_QUIZ_MODAL = 'CLOSE_QUIZ_MODAL';


export interface CreateQuizPayload {
  question: string;
  answer: string;
  questionType: number;
}

export interface ActionType {
  type: string;
  payload: CreateQuizPayload & {key: string, value: string};
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

export function updateInput(payload: {key: string, value: string}) {
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