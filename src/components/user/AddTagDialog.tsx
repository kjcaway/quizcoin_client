import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  open: boolean;
  errorMessages: { inputTag: string}
  handleClose: () => void;
  handleInputChange: (e: any) => void;
  handleValidErrorMsg: (e: any) => void;
  handleSubmit: (e: any) => void;
}

export default function AddTagDialog(props: Props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-title">
      <DialogTitle id="form-title">태그추가</DialogTitle>
      <DialogContent>
        <DialogContentText>
          추가할 태그를 입력하세요.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="inputTag"
          name="inputTag"
          label="Tag 명"
          type="text"
          fullWidth
          helperText={props.errorMessages.inputTag}
          error={props.errorMessages.inputTag ? true : false}
          onBlur={props.handleValidErrorMsg}
          onChange={props.handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleSubmit} variant="contained" color="primary">
          저장
        </Button>
        <Button onClick={props.handleClose} variant="contained" color="default">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
}