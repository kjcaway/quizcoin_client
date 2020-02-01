import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'
import * as alertMsg from '../../store/actions/alertMsgActions'
import * as CONSTANTS from "../../lib/constants";
import MyQuizCardList from '../../components/quiz/MyQuizCardList'


function UserQuizListContainer() {
  const userId = useSelector((store: any) => store.auth.userId)
  const quizList = useSelector((store: any) => store.quiz.quizList, shallowEqual)
  const dispatch = useDispatch();

  const getMyQuizList = () => {
    dispatch({ type: quiz.REQ_GET_MY_QUIZ_LIST });
  }

  const deleteQuiz = (quizId: number) => {
    dispatch({ type: quiz.REQ_DELETE_QUIZ, payload: { quizId: quizId } });
  }

  const handleClickConfirmAnswerUser = (quizId: number) => {
    dispatch({ type: alertMsg.PUSH_MESSAGE, payload: {
      message: CONSTANTS.MSG_READY_TO,
      category: "warning"
    }})
  }
  useEffect(() => {
    getMyQuizList();
    return () => {
      console.log('useEffect clean.')
    };
    // eslint-disable-next-line
  }, [userId])

  return (
    <div>
      <MyQuizCardList
        quizList={quizList}
        handleDeleteClick={deleteQuiz}
        handleClickConfirmAnswerUser={handleClickConfirmAnswerUser}
      />
    </div>
  )
}

export default UserQuizListContainer
