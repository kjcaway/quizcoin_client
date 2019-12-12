import React from 'react'
import AddQuizDialog from '../../components/quiz/AddQuizDialog'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'

function AddQuizDialogContainer() {
  const modalOpen = useSelector((store: any) => store.quiz.modalOpen, shallowEqual)
  const question = useSelector((store: any) => store.quiz.question, shallowEqual)
  const answer = useSelector((store: any) => store.quiz.answer, shallowEqual)
  const questionType = useSelector((store: any) => store.quiz.questionType, shallowEqual)
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    dispatch({ type: quiz.UPDATE_INPUT, 
      payload: {
        key: name,
        value: value
      } });
  };

  return (
    <AddQuizDialog 
      open={modalOpen}
      question={question}
      answer={answer}
      questionType={questionType}
      handleSubmit={createQuiz}
      handleInputChange={updateInput}
      handleClose={close}
    />
  )
}

export default AddQuizDialogContainer
