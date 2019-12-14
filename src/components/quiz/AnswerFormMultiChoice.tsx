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
    <Grid item container>
      <Grid item >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="multiAnswerSheet"
          label="보기"
          name="multiAnswerSheet"
          value={props.multiAnswerSheet}
          onChange={props.handleInputChange}
        />
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={props.handleAddItemClick}
        >
          추가
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={props.handleDelItemClick}
        >
          삭제
        </Button>
        <Typography color='textSecondary'>* 체크한 항목이 정답이 됩니다.</Typography>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs={12} container direction="column">
          <List className={classes.listRoot}>
            {props.multiAnswerItems.map((value:string) => {
              const labelId = `chk-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={undefined}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={props.answer === value}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      name="chkItem"
                      value={value}
                      onChange={props.handleInputChange}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
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
