import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import UserCardItem, {Props as ItemProps} from './UserCardItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }),
);

interface Props {
  users : ItemProps[];
  loggedUserId: string;
}

function UserCardList(props: Props) {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {props.users.map((user, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4}>
          <UserCardItem 
            name={user.name}
            userId={user.userId}
            profile={user.profile}
            score={user.score}
            popular={user.popular}
            quizcnt={user.quizcnt}
            tags={user.tags}
            loggedUserId={props.loggedUserId}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserCardList
