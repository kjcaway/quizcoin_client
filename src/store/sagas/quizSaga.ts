import { call, put, takeEvery, select } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as quiz from "../actions/quizActions";
import * as user from "../actions/userActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";
import { confirm } from "./commonSaga"

function* fetchCreateQuiz(action: quiz.ActionType) {
  try {
    const { question, answer, questionType, multiAnswerItems } = action.payload
    const response = yield call([defaultClient, 'post'], '/api/quiz/create', {
      question,
      answer,
      questionType,
      multiAnswerItems
    });
    const { data } = response;
    yield put(quiz.createQuizSuccess(data));

    const userId = yield select((state) => state.auth.userId)
    yield put(user.getUserInfo({ userId: userId }))
  } catch (error) {
    yield put(quiz.createQuizFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

function* fetchMyQuizList(action: quiz.ActionType) {
  try {
    const response = yield call([defaultClient, 'post'], '/api/quiz/mylist');
    const { data } = response;
    yield put(quiz.getMyQuizListSuccess(data));
  } catch (error) {
    yield put(quiz.getMyQuizListFail(error));

  }
}

function* fetchDeleteQuiz(action: quiz.ActionType) {
  const confirmPayload = {
    title: CONSTANTS.MSG_CONFIRM_DELETE_QUIZ,
    contents: ""
  }
  const isOk = yield call(confirm, confirmPayload);
  if (isOk) {
    try {
      const { quizId } = action.payload
      yield call([defaultClient, 'post'], '/api/quiz/remove', {
        quizId: quizId
      });

      yield put(quiz.reqDeleteQuizSuccess({
        quizId: quizId
      }));
    } catch (error) {
      yield put(quiz.reqDeleteQuizFail(error))
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_API_FAIL,
        category: 'error'
      }))
    }
  }
}

export default function* watchQuiz() {
  yield takeEvery(quiz.REQ_CREATE_QUIZ, fetchCreateQuiz);
  yield takeEvery(quiz.REQ_GET_MY_QUIZ_LIST, fetchMyQuizList);
  yield takeEvery(quiz.REQ_DELETE_QUIZ, fetchDeleteQuiz);
}
