import { call, put, takeEvery, select } from "redux-saga/effects";
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
    let quizListData = response.data;
    const loggedUserId = yield select((state) => state.auth.userId)
    if(loggedUserId){
      const responseMyQuizAnswer = yield call([defaultClient, 'post'], '/api/quiz/myQuizAnswer');
      const myQuizAnswerData = responseMyQuizAnswer.data;
      quizListData.forEach((quiz: any) => {
        const quiz_id = quiz.quiz_id;
        myQuizAnswerData.every((answer: any) => {
          quiz.isCompleted = false;
          if(quiz_id === answer.quiz_id && answer.score > 0){
            // 정답을 맞힌 퀴즈
            quiz.isCompleted = true;
            return false;
          }
          return true;
        })
      })
    }
    yield put(main.getQuizListSuccess(quizListData));
  } catch (error) {
    yield put(main.getQuizListFail(error));
    yield put(alertMsg.pushMessage({
      message: CONSTANTS.MSG_API_FAIL,
      category: 'error'
    }))
  }
}

export default function* watchMain() {
  yield takeEvery(main.REQ_GET_USERS, fetchUsers);
  yield takeEvery(main.REQ_GET_QUIZ_LIST, fetchQuizList);
}
