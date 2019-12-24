import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as main from '../../store/actions/mainActions'
import ProgressCilrcle from '../../components/common/ProgressCilrcle'
import QuizCardList from '../../components/main/QuizCardList'
import { withRouter } from 'react-router-dom'


function LatestContainer(props: any) {
  const status = useSelector((store: any) => store.main.status, shallowEqual)
  const quizList = useSelector((store: any) => store.main.quizList, shallowEqual)
  const dispatch = useDispatch();
  const { userId } = props.match.params;


  const getQuizList = (payload: main.GetQuizListPayload) => {
    dispatch({ type: main.GET_QUIZ_LIST, payload: payload });
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
  }, [])

  return (
    <>
      {
        status === 'SUCCESS' ?
          <QuizCardList
            quizList={quizList}
          /> :
          <ProgressCilrcle />
      }
    </>
  )
}

export default withRouter(LatestContainer)
