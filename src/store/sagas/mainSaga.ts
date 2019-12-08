import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as main from "../actions/mainActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";
import { history } from '../configureStore';

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


export default function* watchMain() {
  yield takeEvery(main.GET_USERS, fetchUsers);
}
