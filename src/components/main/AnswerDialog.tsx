import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { List, ListItem, ListItemIcon, Checkbox, ListItemText, TextField } from '@material-ui/core';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CheckboxForm(props: any) {
  return (<List>
    {props.items.map((value: any, idx: number) => {
      const labelId = `chk-label-${value}`;

      return (
        <ListItem key={value} role={undefined} dense button onClick={undefined}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              name="chkItem"
              value={value}
              checked={props.answerSheet === value}
              onChange={props.handleChangeInput}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={value} />
        </ListItem>
      );
    })}
  </List>)
}

function AnswerDialog(props: any) {
  return (
    <Dialog
      open={props.isOpen}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Q. {props.question}</DialogTitle>
      <DialogContent>
        {
          props.questionTypeName === '객관식' ?
            <CheckboxForm 
              items={props.items}
              handleChangeInput={props.handleChangeInput}
              answerSheet={props.answerSheet}
            />:
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="answerSheet"
              name="answerSheet"
              value={props.answerSheet}
              onChange={props.handleChangeInput}
            />
          }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClickSubmit} variant="contained" color="primary">
          제출
          </Button>
        <Button onClick={props.handleClickClose} variant="contained" color="default">
          취소
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AnswerDialog
