import { call, takeLatest } from "redux-saga/effects";
import * as common from "../actions/commonActions";
import { history } from '../configureStore';

function* goToUrl(action: common.ActionType) {
  const url = action.payload;
  yield call(() => history.push(url));
}

export default function* watchCommon() {
  yield takeLatest(common.GO_TO_URL, goToUrl);
}