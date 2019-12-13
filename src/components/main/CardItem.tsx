import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    pointLabel: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'baseline',
      marginBottom: theme.spacing(1),
    },
    pointNum: {
      fontStyle: 'bold',
      fontSize: '18px',
      color: '#0e14e2',
      marginLeft: theme.spacing(2),
    },
    tags: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);

export interface Props {
  name: string;
  userId : string;
  score : number;
  popular : number;
  profile : string;
  quizcnt : number;
  tags : [];
}

function CardItem(props: Props) {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.profile}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name} ({props.userId})
        </Typography>
        <Box className={classes.pointLabel}>
          <Typography component="h5">
            점수 :
          </Typography>
          <Typography className={classes.pointNum}>
            {props.score}
          </Typography>
        </Box>
        <Box className={classes.pointLabel}>
          <Typography component="h5">
            인기도 :
          </Typography>
          <Typography className={classes.pointNum}>
            {props.popular}
          </Typography>
        </Box>
        <Box className={classes.pointLabel}>
          <Typography component="h5">
            문제수 :
          </Typography>
          <Typography className={classes.pointNum}>
            {props.quizcnt}
          </Typography>
        </Box>
      </CardContent>
      <div className={classes.tags}>
        {
          props.tags.map((tag, idx) => {
            return (
              <Chip key={idx} size="small" label={tag} />
            )
          })
        }
      </div>
      <CardActions>
        <Button size="large" color="primary">
          문제 풀러가기
          <DirectionsRunIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
