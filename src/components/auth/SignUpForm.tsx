import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Avatar, TextField, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);

const SignUpForm = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        회원가입
          </Typography>
      <form className={classes.form} onSubmit={props.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userId"
          label="ID"
          name="userId"
          autoFocus
          helperText={props.errorMessages.userId}
          error={props.errorMessages.userId ? true : false}
          onBlur={props.handleValidErrorMsg}
          onChange={props.handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          helperText={props.errorMessages.password}
          error={props.errorMessages.password ? true : false}
          onBlur={props.handleValidErrorMsg}
          onChange={props.handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="passwordAgain"
          label="Password Again"
          type="password"
          id="passwordAgain"
          helperText={props.errorMessages.passwordAgain}
          error={props.errorMessages.passwordAgain ? true : false}
          onBlur={props.handleValidErrorMsg}
          onChange={props.handleInputChange}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userName"
          label="이름"
          name="userName"
          helperText={props.errorMessages.userName}
          error={props.errorMessages.userName ? true : false}
          onBlur={props.handleValidErrorMsg}
          onChange={props.handleInputChange}
        />

        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.handleSubmit}
        >
          가입하기
            </Button>
        <Grid container>
          <Grid item>
            <Link variant="body2" onMouseDown={props.handleClickSignIn}>
              {"이미 계정이 있습니까? 로그인 페이지로 이동"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default SignUpForm
