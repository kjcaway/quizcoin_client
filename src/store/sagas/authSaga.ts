import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as auth from "../actions/authActions";
import * as alertMsg from "../actions/alertMsgActions";

function* fetchSignInSaga(action: auth.SignInAction) {
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
        message: '로그인에 성공하였습니다.',
        category: 'success'
      }))
    } else {
      yield put(auth.signInFail({error: 'No Token'}));
      yield put(alertMsg.pushMessage({
        message: '로그인 실패하였습니다.',
        category: 'error'
      }))
    }
  } catch (error) {
    yield put(auth.signInFail(error.response));
    yield put(alertMsg.pushMessage({
      message: '로그인 실패하였습니다.',
      category: 'error'
    }))
  }
}


export default function* watchAuth() {
  yield takeEvery(auth.SIGNIN, fetchSignInSaga);
}
