import { call, put, takeEvery, select } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as user from "../actions/userActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";
import { history } from '../configureStore';

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
    yield call(() => { localStorage.removeItem('access_token'); })
    yield call(() => { history.replace("/signin") })
  }
}

function* fetchDelTag(action: user.ActionType) {
  try {
    const { tagName } = action.payload
    yield call([defaultClient, 'post'], '/api/user/removeTag', {
      tagName
    });
    yield put(user.delTagSuccess(tagName));
  } catch (error) {
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_NEED_LOGIN,
      category: 'error'
    }))
    yield call(() => { localStorage.removeItem('access_token'); })
    yield call(() => { history.replace("/signin") })
  }
}

function* fetchUserProfile(action: user.ActionType) {
  try {
    const preLoadImageFile = yield select((state) => state.user.preLoadImageFile)

    const formData = new FormData();
    formData.append('file', preLoadImageFile);
    yield call([defaultClient, 'post'], '/api/user/profile', formData);
    yield put(user.setUserProfileSuccess())
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_SUCCESS_UPDATE_PROFILE,
      category: 'success'
    }))
  } catch (error) {
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

export default function* watchUser() {
  yield takeEvery(user.REQ_GET_USER_INFO, fetchUserInfo);
  yield takeEvery(user.REQ_SET_TAG, fetchSetTag);
  yield takeEvery(user.REQ_DEL_TAG, fetchDelTag);
  yield takeEvery(user.REQ_SET_USER_PROFILE, fetchUserProfile);
}
