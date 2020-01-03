import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
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
  delBtn: {
    marginLeft: 'auto'
  }
});

export default function QuizCard(props: any) {
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
            <Button size="small" color="primary" variant="contained">정답자확인</Button>
            <Button 
              onClick={() => props.handleDeleteClick(props.quizId)}
              size="small" color="secondary" variant="contained" className={classes.delBtn}>삭제</Button>
          </>
        }
      />
      <CardContent>
        <Typography className={classes.question} color="textPrimary" gutterBottom>
          {"[" + props.questionTypeName + "] " + props.question}
        </Typography>
        {
          props.questionTypeName === '객관식' &&
          <Typography className={classes.items} color="textSecondary">
            {"보기 : " + props.items}
          </Typography>
        }
        <Typography className={classes.items} color="primary">
          {"정답 : " + props.answer}
        </Typography>
      </CardContent>
    </Card>
  );
}