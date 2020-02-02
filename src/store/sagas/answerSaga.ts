import { call, put, takeLatest } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as answer from "../actions/answerActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as main from "../actions/mainActions";
import * as CONSTANTS from "../../lib/constants";
import { confirm } from "./commonSaga"

function* fetchChallengeQuiz(action: answer.ActionType) {
  try {
    const response = yield call([defaultClient, 'post'], '/api/user/checkToken');
    if (response.status === 200) {
      const { quizId } = action.payload;
      const { data } = yield call([defaultClient, 'get'], `/api/quiz/${quizId}`);

      if (data.length === 1) {
        const { quiz_id, question, question_type_name, items } = data[0];
        const payload = {
          quizId: quiz_id,
          question: question,
          questionTypeName: question_type_name,
          items: items
        }
        yield put(answer.openAnswerModal(payload))

      }
    }
  } catch (error) {
    localStorage.removeItem('access_token');
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_NEED_LOGIN,
      category: 'warning'
    }))
  }
}

function* fetchAnswer(action: answer.ActionType) {
  const confirmPayload = {
    title: CONSTANTS.MSG_CONFIRM_SUBMIT_ANSWER_SHEET,
    contents: ""
  }
  const isOk = yield call(confirm, confirmPayload);
  if (isOk) {
    try {
      const { quizId, answerSheet } = action.payload
      const response = yield call([defaultClient, 'post'], `/api/quiz/answer`, {
        quizId,
        answerSheet
      });
      if (response.status === 200) {
        yield put(answer.reqAnswerSuccess({}));

        const { isRight, tryCnt, gettingScore } = response.data;
        const isSuccess = Boolean(isRight);
        const message = isSuccess ? CONSTANTS.MSG_RIGHT_ANSWER : CONSTANTS.MSG_WRONG_ANSWER;

        if (isRight) {
          // 정답을 맞췄을 경우
          yield put(main.updateCompletedStatus({
            quizId: quizId,
            isCompleted: isRight
          }))
        }
        yield put(answer.openResultModal({
          isSuccess: isSuccess,
          message: message,
          tryCnt: tryCnt,
          gettingScore: gettingScore
        }));
      }
    } catch (error) {
      yield put(answer.reqAnswerFail(error));
      yield put(alertMsg.pushMessage({
        message: CONSTANTS.MSG_API_FAIL,
        category: 'error'
      }))
    }
  }
}

export default function* watchAnswer() {
  yield takeLatest(answer.CHALLENGE_QUIZ, fetchChallengeQuiz);
  yield takeLatest(answer.REQ_ANSWER, fetchAnswer);
}
