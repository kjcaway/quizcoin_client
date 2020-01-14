export const REQ_SIGNIN = 'REQ_SIGNIN' as const;
export const REQ_SIGNIN_SUCCESS = 'REQ_SIGNIN_SUCCESS' as const;
export const REQ_SIGNIN_FAIL = 'REQ_SIGNIN_FAIL' as const;
export const TEMP_LOGIN = 'TEMP_LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;

export const REQ_SIGNUP = 'REQ_SIGNUP' as const;
export const REQ_SIGNUP_SUCCESS = 'REQ_SIGNUP_SUCCESS' as const;
export const REQ_SIGNUP_FAIL = 'REQ_SIGNUP_FAIL' as const;

export const REQ_CHECK_TOKEN = 'REQ_CHECK_TOKEN' as const;
export const REQ_CHECK_TOKEN_SUCCESS = 'REQ_CHECK_TOKEN_SUCCESS' as const;
export const REQ_CHECK_TOKEN_FAIL = 'REQ_CHECK_TOKEN_FAIL' as const;

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
    type: REQ_SIGNIN,
    payload
  }
}

export function signInSuccess(data: SignInData) {
  return {
    type: REQ_SIGNIN_SUCCESS,
    data
  }
}

export function signInFail(error: any) {
  return {
    type: REQ_SIGNIN_FAIL,
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
    type: REQ_SIGNUP,
    payload
  }
}

export function signUpSuccess(data: any) {
  return {
    type: REQ_SIGNUP_SUCCESS,
    data
  }
}

export function signUpFail(error: any) {
  return {
    type: REQ_SIGNUP_FAIL,
    error
  }
}

export function checkToken() {
  return {
    type: REQ_CHECK_TOKEN,
  }
}

export function checkTokenSuccess(data: CheckTokenData) {
  return {
    type: REQ_CHECK_TOKEN_SUCCESS,
    data
  }
}

export function checkTokenFail() {
  return {
    type: REQ_CHECK_TOKEN_FAIL
  }
}