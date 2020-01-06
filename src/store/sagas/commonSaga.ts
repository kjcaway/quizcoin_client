import { call, takeLatest, put, race, take } from "redux-saga/effects";
import * as common from "../actions/commonActions";
import { history } from '../configureStore';

function* goToUrl(action: common.ActionType) {
  const url = action.payload;
  yield call(() => history.push(url));
}

export function* confirm(payload: common.ConfirmModalPayload) {
  yield put(common.openConfirmModal(payload));

  const { ok } = yield race({
    ok: take(common.OK_CONFIRM_MODAL),
    cancel: take(common.CANCEL_CONFIRM_MODAL)
  })

  yield put(common.closeConfirmModal());

  return Boolean(ok)
}

export default function* watchCommon() {
  yield takeLatest(common.GO_TO_URL, goToUrl);
}