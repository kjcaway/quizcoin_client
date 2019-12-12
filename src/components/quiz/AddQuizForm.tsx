import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid, TextField } from '@material-ui/core';
import AnswerForm from './AnswerForm';
import AnswerFormMultiChoice from './AnswerFormMultiChoice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    btnDiv: {
      display: 'flex',
      justifyContent: 'spacing-between'
    },
    btnDivBtn: {
      margin: theme.spacing(1),
    }
  }),
);

interface Props {
  question: string;
  answer: string;
  questionType: 1 | 2;
  handleSubmit: () => void;
  handleInputChange: (e: any) => void;
  handleClose: () => void;
}

function AddQuizForm(props: Props) {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl required className={classes.formControl} fullWidth>
            <InputLabel id="target-label">문제유형</InputLabel>
            <Select
              labelId="target-label"
              id="target"
              value={props.questionType}
              name="questionType"
              onChange={props.handleInputChange}
            >
              <MenuItem value={1}>객관식</MenuItem>
              <MenuItem value={2}>주관식</MenuItem>
            </Select>
            <FormHelperText>필수입력</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="question"
            label="문제"
            name="question"
            value={props.question}
            onChange={props.handleInputChange}
            autoComplete="question"
          />
        </Grid>
        {
          props.questionType === 1?
          <AnswerFormMultiChoice 
            handleInputChange={props.handleInputChange}
          />
          :
          <AnswerForm 
            handleInputChange={props.handleInputChange}
          />
        }
      </Grid>
      <div className={classes.btnDiv}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btnDivBtn}
          onClick={props.handleSubmit}
        >
          만들기
        </Button>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.btnDivBtn}
          onClick={props.handleClose}
        >
          취소
        </Button>
      </div>
    </form>
  )
}

export default AddQuizForm
