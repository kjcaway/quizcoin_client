import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { IconButton, Typography } from '@material-ui/core';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  successColor: {
    backgroundColor: "#4caf50",
  },
  failColor: {
    backgroundColor: "#9e9e9e",
  },
});

function ResultDialog(props: any) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.isOpen}
      TransitionComponent={Transition}
      transitionDuration={500}
      keepMounted
      fullWidth={true}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" className={props.isSuccess ? classes.successColor : classes.failColor}>
        <IconButton edge="start" color="inherit" >
          {
            props.isSuccess ? <SentimentVerySatisfiedIcon /> : <SentimentVeryDissatisfiedIcon />
          }
        </IconButton>
        <Typography variant="h6" >
          {props.message}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" >
          {"도전 횟수: " + props.tryCnt}
        </Typography>
        <Typography variant="body1" >
          {"획득 점수: " + props.gettingScore}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClickClose} variant="contained" color="default">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ResultDialog
