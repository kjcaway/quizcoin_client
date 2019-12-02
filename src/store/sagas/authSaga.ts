import { call, put, takeEvery, delay } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as auth from "../actions/authActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";

function* fetchSignInSaga(action: auth.ActionType) {
  try {
    const { userId, password } = action.payload;
    const { data } = yield call([defaultClient, 'post'], '/api/user/signin', {
      userId,
      password
    });
    if (data.token) {
      localStorage.setItem('access_token', data.token);
      yield put(auth.signInSuccess(data));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_SIGNIN_SUCCESS,
        category: 'success'
      }))
      yield delay(1000);
      window.location.href = "/"
    } else {
      yield put(auth.signInFail('No Access Token.'));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_SIGNIN_FAIL,
        category: 'error'
      }))
    }
  } catch (error) {
    const message = error.response || 'Unknown'
    yield put(auth.signInFail(message));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_SIGNIN_FAIL,
      category: 'error'
    }))
  }
}

function* fetchSignUpSaga(action: auth.ActionType) {
  try {
    const { userId, password, userName } = action.payload;
    const { data } = yield call([defaultClient, 'post'], '/api/user/signup', {
      userId,
      password,
      userName
    });

    if (data.status === 'Success') {
      yield put(auth.signUpSuccess(data));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_SIGNUP_SUCCESS,
        category: 'success'
      }))
      yield delay(1000);
      window.location.href = "/signin"
    } else {
      yield put(auth.signUpFail('Unknown'));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_SIGNUP_FAIL,
        category: 'error'
      }))
    }
  } catch (error) {
    const message = error.response || 'Unknown'
    yield put(auth.signUpFail(message));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_SIGNUP_FAIL,
      category: 'error'
    }))
  }
}

function* fetchCheckTokenSaga(action: auth.ActionType) {
  try {
    const response = yield call([defaultClient, 'post'], '/api/user/checkToken');
    if (response.status === 200) {
      yield put(auth.checkTokenSuccess());
    } else {
      localStorage.removeItem('access_token');
      yield put(auth.checkTokenFail());
    }
  } catch (error) {
    localStorage.removeItem('access_token');
    yield put(auth.checkTokenFail());
  }
}

export default function* watchAuth() {
  yield takeEvery(auth.SIGNIN, fetchSignInSaga);
  yield takeEvery(auth.SIGNUP, fetchSignUpSaga);
  yield takeEvery(auth.CHECK_TOKEN, fetchCheckTokenSaga);
}
