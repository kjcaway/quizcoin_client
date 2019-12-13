import React from 'react'
import AddQuizDialog from '../../components/quiz/AddQuizDialog'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'

function AddQuizDialogContainer() {
  const modalOpen = useSelector((store: any) => store.quiz.modalOpen)
  const question = useSelector((store: any) => store.quiz.question)
  const answer = useSelector((store: any) => store.quiz.answer)
  const questionType = useSelector((store: any) => store.quiz.questionType)
  const multiAnswerSheet = useSelector((store: any) => store.quiz.multiAnswerSheet)
  const multiAnswerItems = useSelector((store: any) => store.quiz.multiAnswerItems, shallowEqual)
  const dispatch = useDispatch();

  const createQuiz = () => {
    const payload = {
      question: question,
      answer: answer,
      questionType: questionType
    }
    dispatch({ type: quiz.CREATE_QUIZ, payload: payload });
  };

  const close = () => {
    dispatch({ type: quiz.CLOSE_QUIZ_MODAL });
  }

  const updateInput = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'chkItem') {
      dispatch({
        type: quiz.UPDATE_INPUT,
        payload: {
          key: "answer",
          value: value
        }
      });

    } else {
      dispatch({
        type: quiz.UPDATE_INPUT,
        payload: {
          key: name,
          value: value
        }
      });

    }
  };

  const addItem = () => {
    dispatch({ type: quiz.ADD_QUIZ_ITEM, payload: multiAnswerSheet });
  }

  const deleteItem = () => {
    dispatch({ type: quiz.DEL_QUIZ_ITEM, payload: answer });
  }

  return (
    <AddQuizDialog
      open={modalOpen}
      question={question}
      answer={answer}
      questionType={questionType}
      multiAnswerSheet={multiAnswerSheet}
      multiAnswerItems={multiAnswerItems || []}
      handleSubmit={createQuiz}
      handleInputChange={updateInput}
      handleClose={close}
      handleAddItemClick={addItem}
      handleDelItemClick={deleteItem}
    />
  )
}

export default AddQuizDialogContainer
