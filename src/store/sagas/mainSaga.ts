import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as main from "../actions/mainActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";

function* fetchUsers(action: main.ActionType) {
  try {
    const { limit, offset } = action.payload
    const response = yield call([defaultClient, 'post'], '/api/user/list', {
      limit,
      offset
    });
    const { data } = response;
    yield put(main.getUsersSuccess(data));
  } catch (error) {
    yield put(main.getUsersFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

function* fetchQuizList(action: main.ActionType) {
  try {
    const { userId, limit, offset } = action.payload;
    const response = yield call([defaultClient, 'post'], '/api/quiz/list', {
      userId,
      limit,
      offset
    });
    const { data } = response;
    yield put(main.getQuizListSuccess(data));
  } catch (error) {
    yield put(main.getQuizListFail(error));

  }
}

export default function* watchMain() {
  yield takeEvery(main.GET_USERS, fetchUsers);
  yield takeEvery(main.GET_QUIZ_LIST, fetchQuizList);
}
