import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'
import QuizCardList from '../../components/quiz/QuizCardList'


function UserQuizListContainer() {
  const userId = useSelector((store: any) => store.auth.userId)
  const quizList = useSelector((store: any) => store.quiz.quizList, shallowEqual)
  const dispatch = useDispatch();

  const getMyQuizList = () => {
    dispatch({ type: quiz.GET_MY_QUIZ_LIST });
  }

  const deleteQuiz = (quizId: number) => {
    dispatch({ type: quiz.REQ_DELETE_QUIZ, payload: { quizId: quizId } });
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
      <QuizCardList
        quizList={quizList}
        handleDeleteClick={deleteQuiz}
      />
    </div>
  )
}

export default UserQuizListContainer
