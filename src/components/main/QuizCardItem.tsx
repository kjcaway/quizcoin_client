import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, CardActions } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 180
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
});

function QuizCardItem(props : any) {
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
        <Fab 
          variant="extended" 
          className={classes.cardActionBtn}
          onClick={() => props.handleClickChallenge(props.quizId)}>
          도전
        </Fab>
      </CardActions>
    </Card>
  )
}

export default QuizCardItem
