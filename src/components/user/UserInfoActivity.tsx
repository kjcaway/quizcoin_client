import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Box, Card, CardContent, Chip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    //card
    infoRoot: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      display: 'flex',
    },
    content: {
      flex: '1 0 auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    cover: {
      width: 150,
      height: 150
    },
    textLabel: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'baseline',
      marginBottom: theme.spacing(1),
    },
    textValue: {
      fontStyle: 'bold',
      fontSize: '18px',
      color: '#0e14e2',
      marginLeft: theme.spacing(2),
    },
    btnMake: {
      marginLeft: theme.spacing(2),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    linkText: {
      cursor: "pointer",
      color: '#ec1b1b',
      fontSize: '24px',
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }),
);

function UserInfoActivity(props: any) {
  const classes = useStyles();
  // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              나의 문제 수 :
            </Typography>
            <Typography className={classes.textValue}>
              <Link className={classes.linkText} onClick={props.handleClickMyQuizCnt}>
                {props.quizCnt}
              </Link>
            </Typography>
            <Button
              type="button"
              variant="outlined"
              color="primary"
              className={classes.btnMake}
              onClick={props.handleAddQuizClick}
            >
              문제 만들기
              <AddIcon className={classes.rightIcon} />
            </Button>
          </Box>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              획득 점수 :
            </Typography>
            <Typography className={classes.textValue}>
              {props.score}
            </Typography>
          </Box>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              인기도 :
            </Typography>
            <Typography className={classes.textValue}>
              {props.popular}
            </Typography>
          </Box>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              태그 :
            </Typography>
            {props.tags.map((tag: string, idx: number) => {
              let icon = <div></div>;

              return (
                <Chip
                  key={idx}
                  icon={icon}
                  label={tag}
                  onDelete={() => props.handleDeleteTagClick({tagName : tag})}
                  className={classes.chip}
                />
              );
            })}
            <Button
              type="button"
              variant="outlined"
              color="primary"
              className={classes.btnMake}
              onClick={props.handleAddTagClick}
            >
              태그 추가
              <AddIcon className={classes.rightIcon} />
            </Button>
          </Box>

        </CardContent>
      </div>
    </Card>
  )
}

export default UserInfoActivity
