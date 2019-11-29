export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const TEMP_LOGIN = 'TEMP_LOGIN';
export const LOGOUT = 'LOGOUT';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const CHECK_TOKEN = 'CHECK_TOKEN';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAIL = 'CHECK_TOKEN_FAIL';

export interface SignInPayload{
  userId: string;
  password: string;
}

export interface SignUpPayload{
  userId: string;
  password: string;
  userName: string;
}

export interface SignInData{
  data : {};
}

export interface ActionType{
  type: string;
  payload: SignInPayload & SignUpPayload;
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

export function logout(){
  return {
    type: LOGOUT,
  }
}

export function signUp(payload: SignUpPayload){
  return {
    type: SIGNIN,
    payload
  }
}

export function signUpSuccess(data: any){
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}

export function signUpFail(error: any){
  return {
    type: SIGNIN_FAIL,
    error
  }
}

export function checkToken(){
  return {
    type: CHECK_TOKEN,
  }
}

export function checkTokenSuccess(){
  return {
    type: CHECK_TOKEN_SUCCESS
  }
}

export function checkTokenFail(){
  return {
    type: CHECK_TOKEN_FAIL
  }
}