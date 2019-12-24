export const GET_USERS = 'GET_USERS' as const;
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS' as const;
export const GET_USERS_FAIL = 'GET_USERS_FAIL' as const;

export const GET_QUIZ_LIST = 'GET_QUIZ_LIST' as const;
export const GET_QUIZ_LIST_SUCCESS = 'GET_QUIZ_LIST_SUCCESS' as const;
export const GET_QUIZ_LIST_FAIL = 'GET_QUIZ_LIST_FAIL' as const;

export interface GetUsersPayload {
  limit: number;
  offset: number;
}

export interface GetQuizListPayload {
  userId: string;
  limit: number;
  offset: number;
}

export interface ActionType {
  type: string;
  payload: GetUsersPayload & GetQuizListPayload;
  data?: any;
  error?: any;
}

export function getUsers(payload: GetUsersPayload) {
  return {
    type: GET_USERS,
    payload
  };
}

export function getUsersSuccess(data: any) {
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}

export function getUsersFail(error: any) {
  return {
    type: GET_USERS_FAIL,
    error
  }
}

export function getQuizList(payload: GetQuizListPayload) {
  return {
    type: GET_QUIZ_LIST,
    payload
  }
}

export function getQuizListSuccess(data: any) {
  return {
    type: GET_QUIZ_LIST_SUCCESS,
    data
  }
}

export function getQuizListFail(error: any) {
  return {
    type: GET_QUIZ_LIST_FAIL,
    error
  }
}