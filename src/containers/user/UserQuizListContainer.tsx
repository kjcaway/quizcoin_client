import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'
import QuizCardList from '../../components/quiz/QuizCardList'


function UserQuizListContainer() {
  const userId = useSelector((store: any) => store.auth.userId)
  const quizList = useSelector((store: any) => store.quiz.quizList, shallowEqual)
  const dispatch = useDispatch();

  const getQuizList = () => {
    const payload = {
      userId: userId
    }
    dispatch({ type: quiz.GET_QUIZ_LIST, payload: payload });
  }

  useEffect(() => {
    getQuizList();
    return () => {
      console.log('useEffect clean.')
    };
    // eslint-disable-next-line
  }, [userId])
  
  return (
    <div>
      <QuizCardList quizList={quizList}/>
    </div>
  )
}

export default UserQuizListContainer
