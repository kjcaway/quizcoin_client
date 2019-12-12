import { call, put, takeEvery, select } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as quiz from "../actions/quizActions";
import * as user from "../actions/userActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";


function* fetchCreateQuiz(action: quiz.ActionType) {
  try {
    const { question, answer, questionType } = action.payload
    const response = yield call([defaultClient, 'post'], '/api/quiz/create', {
      question,
      answer,
      questionType
    });
    const { data } = response;
    yield put(quiz.createQuizSuccess(data));

    const userId = yield select((state) => state.auth.userId)
    yield put(user.getUserInfo({userId: userId}))
  } catch (error) {
    yield put(quiz.createQuizFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}


export default function* watchQuiz() {
  yield takeEvery(quiz.CREATE_QUIZ, fetchCreateQuiz);
}
