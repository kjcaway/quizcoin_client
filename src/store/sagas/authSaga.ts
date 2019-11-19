import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as auth from "../actions/authActions";

function* fetchSignInSaga(action: auth.SignInAction) {
  try {
    const {userId, password} = action.payload;
    const { data } = yield call([defaultClient, 'post'], '/api/user/signin', {
      userId, 
      password
    })
    yield put(auth.signInSuccess(data.data));
  } catch (error) {
    yield put(auth.signInFail(error.response));
  }
}


export default function* watchAuth() {
  yield takeEvery(auth.SIGNIN, fetchSignInSaga);
}
