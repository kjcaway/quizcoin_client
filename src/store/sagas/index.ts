import { spawn } from "redux-saga/effects";
import watchAuth from './authSaga'
import watchUser from './userSaga'
import watchMain from './mainSaga'
import watchQuiz from './quizSaga'
import watchCommon from './commonSaga'
import watchAnswer from './answerSaga'

// 모든 listener(watcher)를 하나로 묶어준다.
// rootReducer에 묶어주는 그것과 같다고 보면 된다.
export default function* rootSaga() {
  yield spawn(watchAuth);
  yield spawn(watchUser);
  yield spawn(watchMain);
  yield spawn(watchQuiz);
  yield spawn(watchCommon);
  yield spawn(watchAnswer);
}