import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as main from '../../store/actions/mainActions'
import * as answer from '../../store/actions/answerActions'
import ProgressCircle from '../../components/common/ProgressCircle'
import QuizCardList from '../../components/main/QuizCardList'
import { withRouter } from 'react-router-dom'


function LatestContainer(props: any) {
  const status = useSelector((store: any) => store.main.status, shallowEqual)
  const quizList = useSelector((store: any) => store.main.quizList, shallowEqual)
  const loggedUserId = useSelector((store: any) => store.auth.userId)
  const dispatch = useDispatch();
  const { userId } = props.match.params;


  const getQuizList = (payload: main.GetQuizListPayload) => {
    dispatch({ type: main.REQ_GET_QUIZ_LIST, payload: payload });
  };

  useEffect(() => {
    getQuizList({
      limit: 27,
      offset: 0,
      userId: userId
    })
    return () => {
      console.log('useEffect clean.')
    };
    // eslint-disable-next-line
  }, [userId])

  const handleClickChallenge = (quizId: number) => {
    dispatch({ type: answer.CHALLENGE_QUIZ, payload: { quizId: quizId } })
  }

  return (
    <>
      {
        status === 'SUCCESS' ?
          <QuizCardList
            quizList={quizList}
            handleClickChallenge={handleClickChallenge}
            loggedUserId={loggedUserId}
          /> :
          <ProgressCircle />
      }
    </>
  )
}

export default withRouter(LatestContainer)
