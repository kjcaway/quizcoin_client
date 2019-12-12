import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  Grid, TextField, ListItem, ListItemIcon, Checkbox, ListItemText, List } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listRoot: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    btnHelp: {
      display:'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    }
  }),
);
function AnswerFormMultiChoice(props: any) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="item"
          label="보기"
          name="item"

        />
        <Button
          type="button"
          variant="outlined"
          color="primary"
        >
          추가
        </Button>
        <Typography>* 체크한 항목이 정답이 됩니다.</Typography>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs={12} container direction="column">
          <List className={classes.listRoot}>
            {[0, 1, 2, 3].map(value => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={undefined}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      //checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Item ${value + 1}`} />
                </ListItem>
              );
            })}
          </List>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default AnswerFormMultiChoice
