export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

export interface UserInfoPayload {
  userId: string;
}

export interface UserInfoData {
  user_id: string;
  name: string;
  profile: string;
  quizcnt: number;
  score: number;
  popular: number;
  tags: string;
}

export interface ActionType {
  type: string;
  payload: UserInfoPayload;
  data?: UserInfoData;
  error?: any;
}

export function getUserInfo(payload: UserInfoPayload) {
  return {
    type: GET_USER_INFO,
    payload
  }
}

export function getUserInfoSuccess(data: UserInfoData) {
  return {
    type: GET_USER_INFO_SUCCESS,
    data
  }
}

export function getUserInfoFail(error: any) {
  return {
    type: GET_USER_INFO_FAIL,
    error
  }
}