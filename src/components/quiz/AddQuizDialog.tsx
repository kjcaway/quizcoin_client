import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import AddQuizForm from './AddQuizForm';

interface Props {
  open: boolean;
  question: string;
  answer: string;
  questionType: 1 | 2;
  multiAnswerSheet: string;
  multiAnswerItems: string[];
  handleSubmit: () => void;
  handleInputChange: (e: any) => void;
  handleClose: () => void;
  handleAddItemClick: () => void;
  handleDelItemClick: () => void;
}

function AddQuizDialog(props: Props) {
  return (
    <Dialog open={props.open} aria-labelledby="form-title">
      <DialogTitle id="form-title">
        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
          퀴즈 생성
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          퀴즈를 만들어 보세요. 객관식 또는 주관식으로 만들 수 있습니다.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <AddQuizForm 
          question={props.question}
          answer={props.answer}
          questionType={props.questionType}
          multiAnswerSheet={props.multiAnswerSheet}
          multiAnswerItems={props.multiAnswerItems}
          handleSubmit={props.handleSubmit}
          handleInputChange={props.handleInputChange}
          handleClose={props.handleClose}
          handleAddItemClick={props.handleAddItemClick}
          handleDelItemClick={props.handleDelItemClick}
        />
      </DialogContent>
    </Dialog>
  )
}

export default AddQuizDialog
