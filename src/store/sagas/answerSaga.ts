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

export default function* watchAnswer() {
  yield takeLatest(answer.CHALLENGE_QUIZ, fetchChallengeQuiz);
}
