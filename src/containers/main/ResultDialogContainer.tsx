import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ResultDialog from '../../components/main/ResultDialog';
import * as answer from '../../store/actions/answerActions'


function ResultDialogContainer() {
  const modalOpen = useSelector((store: any) => store.answer.result.modalOpen)
  const isSuccess = useSelector((store: any) => store.answer.result.isSuccess)
  const message = useSelector((store: any) => store.answer.result.message)
  const tryCnt = useSelector((store: any) => store.answer.result.tryCnt)
  const gettingScore = useSelector((store: any) => store.answer.result.gettingScore)
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: answer.CLOSE_RESULT_MODAL });
  };

  return (
    <ResultDialog
      isOpen={modalOpen}
      isSuccess={isSuccess}
      message={message}
      tryCnt={tryCnt}
      gettingScore={gettingScore}
      handleClickClose={closeModal}
    />
  )
}

export default ResultDialogContainer
