import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleDiv: {
      marginTop: theme.spacing(1),
    },
  }),
);

function Title(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.titleDiv}>
      <Typography gutterBottom variant="h4">
        {props.title}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {props.description}
      </Typography>
      <Divider variant="fullWidth" />
    </div>
  )
}

export default Title
