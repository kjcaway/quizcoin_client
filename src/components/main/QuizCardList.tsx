import React from 'react'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { convertToFromNow } from '../../lib/utils';
import QuizCardItem from './QuizCardItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
    },
  }),
);

interface Quiz {
  quiz_id: number;
  question: string;
  question_type_name: string;
  created_time: string;
  items: string;
}

interface Props {
  quizList : []
}

function QuizCardList(props : Props) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {props.quizList.map((quiz: Quiz, idx) => {
        return (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <QuizCardItem 
              num={idx+1}
              quizId={quiz.quiz_id}
              question={quiz.question}
              questionTypeName={quiz.question_type_name}
              createdTime={convertToFromNow(quiz.created_time)}
              items={quiz.items}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default QuizCardList
