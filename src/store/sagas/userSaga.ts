import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as user from "../actions/userActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";

function* fetchUserInfo(action: user.ActionType) {
  try {
    const { userId } = action.payload
    const response = yield call([defaultClient, 'post'], '/api/user/', {
      userId
    });
    const { data } = response;
    yield put(user.getUserInfoSuccess(data[0]));
  } catch (error) {
    yield put(user.getUserInfoFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

function* fetchSetTag(action: user.ActionType) {
  try {
    const { tagName } = action.payload
    yield call([defaultClient, 'post'], '/api/user/tag', {
      tagName
    });
    yield put(user.setTagSuccess(tagName));
    yield put(user.addTagModalClose());
  } catch (error) {
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_NEED_LOGIN,
      category: 'error'
    }))
    yield put(user.addTagModalClose());
  }
}

export default function* watchUser() {
  yield takeEvery(user.GET_USER_INFO, fetchUserInfo);
  yield takeEvery(user.SET_TAG, fetchSetTag);
}
