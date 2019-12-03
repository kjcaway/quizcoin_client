import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as user from "../actions/userActions";


function* fetchUserInfo(action: user.ActionType) {
  try {
    const {userId} = action.payload
    const response = yield call([defaultClient, 'post'], '/api/user/', {
      userId
    });
    const {data} = response;
    if (response.status === 200 && data.length === 1) {
      yield put(user.getUserInfoSuccess(data[0]));
    } else {
      yield put(user.getUserInfoFail(response));
    }
  } catch (error) {
    yield put(user.getUserInfoFail(error));

  }
}


export default function* watchUser() {
  yield takeEvery(user.GET_USER_INFO, fetchUserInfo);
}
