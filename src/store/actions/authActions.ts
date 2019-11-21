export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const TEMP_LOGIN = 'TEMP_LOGIN';

export interface SignInPayload{
  userId: string;
  password: string;
}

export interface SignInData{
  data : {};
}

export interface SignInAction{
  type: string;
  payload: SignInPayload;
  data?: SignInData;
  error?: any;
}

export function signIn(payload: SignInPayload){
  return {
    type: SIGNIN,
    payload
  }
}

export function signInSuccess(data: SignInData){
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}

export function signInFail(error: any){
  return {
    type: SIGNIN_FAIL,
    error
  }
}

export function tempLogin(){
  return {
    type: TEMP_LOGIN,
  }
}