export const SIGNIN = 'SIGNIN' as const;
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS' as const;
export const SIGNIN_FAIL = 'SIGNIN_FAIL' as const;
export const TEMP_LOGIN = 'TEMP_LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;

export const SIGNUP = 'SIGNUP' as const;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const;
export const SIGNUP_FAIL = 'SIGNUP_FAIL' as const;

export const CHECK_TOKEN = 'CHECK_TOKEN' as const;
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS' as const;
export const CHECK_TOKEN_FAIL = 'CHECK_TOKEN_FAIL' as const;

export interface SignInPayload {
  userId: string;
  password: string;
}

export interface SignUpPayload {
  userId: string;
  password: string;
  userName: string;
}

export interface SignInData {
  data: {};
}

export interface CheckTokenData {
  tokenInfo: {};
}

export interface ActionType {
  type: string;
  payload: SignInPayload & SignUpPayload;
  data?: SignInData & CheckTokenData;
  error?: any;
}

export function signIn(payload: SignInPayload) {
  return {
    type: SIGNIN,
    payload
  }
}

export function signInSuccess(data: SignInData) {
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}

export function signInFail(error: any) {
  return {
    type: SIGNIN_FAIL,
    error
  }
}

export function tempLogin() {
  return {
    type: TEMP_LOGIN,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function signUp(payload: SignUpPayload) {
  return {
    type: SIGNIN,
    payload
  }
}

export function signUpSuccess(data: any) {
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}

export function signUpFail(error: any) {
  return {
    type: SIGNIN_FAIL,
    error
  }
}

export function checkToken() {
  return {
    type: CHECK_TOKEN,
  }
}

export function checkTokenSuccess(data: CheckTokenData) {
  return {
    type: CHECK_TOKEN_SUCCESS,
    data
  }
}

export function checkTokenFail() {
  return {
    type: CHECK_TOKEN_FAIL
  }
}