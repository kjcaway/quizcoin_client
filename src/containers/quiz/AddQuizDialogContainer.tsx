import React from 'react'
import AddQuizDialog from '../../components/quiz/AddQuizDialog'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as quiz from '../../store/actions/quizActions'
import _ from 'lodash';

function AddQuizDialogContainer() {
  const modalOpen = useSelector((store: any) => store.quiz.modalOpen)
  const question = useSelector((store: any) => store.quiz.question)
  const answer = useSelector((store: any) => store.quiz.answer)
  const questionType = useSelector((store: any) => store.quiz.questionType)
  const multiAnswerSheet = useSelector((store: any) => store.quiz.multiAnswerSheet)
  const multiAnswerItems = useSelector((store: any) => store.quiz.multiAnswerItems, shallowEqual)
  const dispatch = useDispatch();

  const createQuiz = () => {
    if (_.isEmpty(question) || _.isEmpty(answer)) {
      alert('입력값이 올바르지 않습니다.');
    } else if (questionType === 1 && multiAnswerItems.lengh < 2) {
      alert('보기는 2개이상 이어야합니다.');
    } else {
      const payload = {
        question: question,
        answer: answer,
        questionType: questionType,
        multiAnswerItems: multiAnswerItems
      }
      dispatch({ type: quiz.CREATE_QUIZ, payload: payload });
    }
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
    if (!_.isEmpty(multiAnswerSheet)) {
      dispatch({ type: quiz.ADD_QUIZ_ITEM, payload: multiAnswerSheet });
    }
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
