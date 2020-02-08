import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as auth from "../actions/authActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as common from "../actions/commonActions";
import * as CONSTANTS from "../../lib/constants";
import { history } from '../configureStore';
import _ from "lodash";

function* fetchSignInSaga(action: auth.ActionType) {
  try {
    const { userId, password } = action.payload;
    const { data } = yield call([defaultClient, 'post'], '/api/user/signin', {
      userId,
      password
    });

    localStorage.setItem('access_token', data.token);

    yield put(auth.signInSuccess(data));
    yield call(() => history.push("/"));
  } catch (error) {
    const httpStatus = _.get(error, 'response.status', 500);

    if (httpStatus === 404) {
      yield put(auth.signUpFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_NO_USER,
        category: 'error'
      }))
    } else if (httpStatus === 401) {
      yield put(auth.signUpFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_WRONG_PASSWORD,
        category: 'error'
      }))
    } else {
      yield put(auth.signUpFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_API_FAIL,
        category: 'error'
      }))
    }
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

    yield put(auth.signUpSuccess(data));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_REQ_SIGNUP_SUCCESS,
      category: 'success'
    }))
    yield call(() => history.push("/signin"))
  } catch (error) {
    const httpStatus = _.get(error, 'response.status', 500);

    if (httpStatus === 409) {
      yield put(auth.signUpFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_ID_CONFLICT,
        category: 'error'
      }))
    } else {
      yield put(auth.signUpFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_API_FAIL,
        category: 'error'
      }))
    }
  }
}

function* fetchCheckTokenSaga(action: auth.ActionType) {
  try {
    const response = yield call([defaultClient, 'post'], '/api/user/checkToken');

    if (response.status === 200) {
      yield put(auth.checkTokenSuccess(response.data));
      yield call(() => {
        //todo 로그인 상태에서 로그인페이지 또는 회원가입 페이지 접근시 index로 라우팅
        const pathname = history.location.pathname;

        if (pathname === '/signin' || pathname === '/signup') {
          history.push("/");
        }
      })
    } else {
      localStorage.removeItem('access_token');
      yield put(auth.checkTokenFail());
    }
  } catch (error) {
    localStorage.removeItem('access_token');
    yield put(auth.checkTokenFail());
  }
}

function* logoutSaga() {
  localStorage.removeItem('access_token');
  yield put(auth.logoutSuccess());
  yield put(common.goToUrl('/'))
}

export default function* watchAuth() {
  yield takeEvery(auth.REQ_SIGNIN, fetchSignInSaga);
  yield takeEvery(auth.REQ_SIGNUP, fetchSignUpSaga);
  yield takeEvery(auth.REQ_CHECK_TOKEN, fetchCheckTokenSaga);
  yield takeEvery(auth.LOGOUT, logoutSaga);
}
