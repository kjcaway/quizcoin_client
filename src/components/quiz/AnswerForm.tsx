import React from 'react'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

function AnswerForm(props: any) {
  return (
    <Grid item xs={6}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="answer"
        label="정답"
        name="answer"
        autoComplete="answer"
        value={props.answer}
        onChange={props.handleInputChange}
      />
    </Grid>
  )
}

export default AnswerForm
