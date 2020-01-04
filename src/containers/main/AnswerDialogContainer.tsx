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
  const answerSheet = useSelector((store: any) => store.answer.answerSheet)
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: answer.CLOSE_ANSWER_MODAL });
  };

  const updateInput = (event: any) => {
    const target = event.target;
    const { value } = target;
    dispatch({
      type: answer.UPDATE_ANSWERSHEET,
      payload: {
        key: "answerSheet",
        value: value
      }
    });
  }

  const submitAnswer = () => {
    dispatch({
      type: answer.REQ_ANSWER,
      payload: {
        quizId: quizId,
        answerSheet: answerSheet
      }
    })
  }
  return (
    <AnswerDialog
      isOpen={modalOpen}
      quizId={quizId}
      question={question}
      questionTypeName={questionTypeName}
      items={items}
      answerSheet={answerSheet}
      handleClickClose={closeModal}
      handleChangeInput={updateInput}
      handleClickSubmit={submitAnswer}
    />
  )
}

export default AnswerDialogContainer
