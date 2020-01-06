import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  title: string;
  contents: string;
  isOpen: boolean;
  handleClose: () => void;
  handleClickOk: () => void;
  handleClickCancel: () => void;
}

function ConfirmBox(props: Props) {
  return (
    <Dialog open={props.isOpen} onClose={props.handleClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.contents}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClickOk} variant="outlined" color="primary">
          확인
        </Button>
        <Button onClick={props.handleClickCancel} variant="outlined" color="default">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmBox
