export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'

export interface GetUsersPayload {
  limit: number;
  offset: number;
}

export interface ActionType {
  type: string;
  payload: GetUsersPayload;
  data?: any;
  error?: any;
}

export function getUsers(payload: GetUsersPayload) {
  return {
    type: GET_USERS,
    payload
  }
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