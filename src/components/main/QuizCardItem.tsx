import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, CardActions, Badge } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 180,
  },
  question: {
    fontSize: 14,
  },
  items: {
    fontSize: 12,
  },
  avatar: {
    backgroundColor: blueGrey[500],
  },
  cardActionDiv: {
    justifyContent: 'center',
    padding: '4px'
  },
  cardActionBtn: {
    minWidth: '100px',
    backgroundColor: '#4f8bca',
    color: '#fefefe',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  cardActionBtnDone: {
    minWidth: '100px',
    backgroundColor: blueGrey[500],
    color: '#fefefe',
    '&:hover': {
      backgroundColor: blueGrey[500],
      borderColor: blueGrey[500],
      boxShadow: 'none',
    },
  },
});

function QuizCardItem(props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.num}
          </Avatar>
        }
        title={'생성일: ' + props.createdTime}
        action={
          <>
            <Badge color="primary" variant="dot" invisible={props.loggedUserId === props.userId ? false : true} >
              <Chip size="small" label={props.userId + '님의 퀴즈'} />
            </Badge>
          </>
        }
      />
      <CardContent>
        <Typography className={classes.question} color="textPrimary" gutterBottom>
          {"[" + props.questionTypeName + "] " + props.question}
        </Typography>
        {
          props.questionTypeName === '객관식' &&
          <>
            {
              props.items.map((item: string, idx: number) => {
                const num = idx + 1;
                return (
                  <Typography key={idx} className={classes.items} color="textSecondary">
                    {num + ". " + item}
                  </Typography>
                )
              })
            }
          </>
        }
      </CardContent>
      <CardActions className={classes.cardActionDiv}>
        {
          props.loggedUserId !== props.userId &&
          (
            props.isCompleted ?
              <Fab
                variant="extended"
                className={classes.cardActionBtnDone}
              >
                완료<DoneIcon />
              </Fab>
              :
              <Fab
                variant="extended"
                className={classes.cardActionBtn}
                onClick={() => props.handleClickChallenge(props.quizId)}>
                도전
              </Fab>
          )
        }
      </CardActions>
    </Card>
  )
}

export default QuizCardItem
