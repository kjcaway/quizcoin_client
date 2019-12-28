import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import AnswerDialog from '../../components/main/AnswerDialog';
import * as answer from '../../store/actions/answerActions'


function AnswerDialogContainer() {
  const modalOpen = useSelector((store: any) => store.answer.modalOpen)
  const quizId = useSelector((store: any) => store.answer.quizId)
  const question = useSelector((store: any) => store.answer.question)
  const questionTypeName = useSelector((store: any) => store.answer.questionTypeName)
  const items = useSelector((store: any) => store.answer.items, shallowEqual)
  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch({ type: answer.CLOSE_ANSWER_MODAL });
  };

  return (
    <AnswerDialog 
      isOpen={modalOpen}
      quizId={quizId}
      question={question}
      questionTypeName={questionTypeName}
      items={items}
      handleClickClose={handleClickClose}
    />
  )
}

export default AnswerDialogContainer
