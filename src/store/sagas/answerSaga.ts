import { call, put, takeLatest } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as answer from "../actions/answerActions";
import * as alertMsg from "../actions/alertMsgActions";
import * as CONSTANTS from "../../lib/constants";

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
  try {
    const { quizId, answerSheet } = action.payload
    const response = yield call([defaultClient, 'post'], `/api/quiz/answer`, {
      quizId,
      answerSheet
    });
    if (response.status === 200) {
      yield put(answer.reqAnswerSuccess({}));

      const { isRight, gettingScore, rightAnswer } = response.data;
      const message = `
        ${isRight?CONSTANTS.MSG_RIGHT_ANSWER:CONSTANTS.MSG_WRONG_ANSWER}
        정답 : ${rightAnswer}
        획득점수 : ${gettingScore}
      `
      yield put(alertMsg.pushMessage({
        message: message,
        category: 'success'
      }))
    }
  } catch (error) {
    yield put(answer.reqAnswerFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

export default function* watchAnswer() {
  yield takeLatest(answer.CHALLENGE_QUIZ, fetchChallengeQuiz);
  yield takeLatest(answer.REQ_ANSWER, fetchAnswer);
}
