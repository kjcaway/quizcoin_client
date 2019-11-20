import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as auth from "../actions/authActions";
import * as alertMsg from "../actions/alertMsgActions";

function* fetchSignInSaga(action: auth.SignInAction) {
  try {
    const {userId, password} = action.payload;
    const { data } = yield call([defaultClient, 'post'], '/api/user/signin', {
      userId, 
      password
    })
    yield put(auth.signInSuccess(data.data));
    yield put(alertMsg.pushMessage({
      message: '로그인에 성공하였습니다.',
      category: 'success'
    }))
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
