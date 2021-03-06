import React from 'react'
import { Card, CardContent, Typography, Box, CardMedia, CardActionArea } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    //card
    card: {
      display: 'flex',
      marginTop: theme.spacing(8),
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
      height: 180
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
  }),
);

function UserInfoProfile(props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cover}
        onClick={props.handleClickProfile}
      >
        <CardMedia
          component="img"
          title="프로필사진"
          src={props.profile}
        />
      </CardActionArea>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            나의 정보
          </Typography>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              아이디 :
            </Typography>
            <Typography className={classes.textValue}>
              {props.userId}
            </Typography>
          </Box>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              이름 :
            </Typography>
            <Typography className={classes.textValue}>
              {props.name}
            </Typography>
          </Box>
          <Box className={classes.textLabel}>
            <Typography component="h4">
              가입일 :
            </Typography>
            <Typography className={classes.textValue}>
              {props.createdTime}
            </Typography>
          </Box>
          {
            props.isPreLoadImage ?
            <Box>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="small"
                onClick={props.handleClickSave}
              >
                사진 변경
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                size="small"
                onClick={props.handleClickCancel}
              >
                취소
              </Button>
            </Box>:
            <Box>
              <Typography color="textSecondary" variant="body2">
                프로필 사진을 변경하려면 왼쪽을 클릭하세요.
              </Typography>
            </Box>
          }
        </CardContent>
      </div>
    </Card>
  )
}

export default React.memo(UserInfoProfile);
