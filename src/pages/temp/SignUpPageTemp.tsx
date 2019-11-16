import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container, CssBaseline, Link, Avatar, TextField, Grid, Box } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // app bar
    containerRoot: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    appBarRoot: {
      flexGrow: 8,
    },
    linkRoot: {
      flexGrow: 7,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    link: {
      margin: theme.spacing(1.5),
      fontSize: '18px',
      fontStyle: 'italic'
    },

    // login
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

const MainPageTemp = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  
  return (
    <Container
      maxWidth="xl"
      classes={{
        root: classes.containerRoot,
      }}
    >
      <CssBaseline />
      <div className={classes.appBarRoot}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <EmojiEventsIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              QuizCoin
            </Typography>
            <div className={classes.linkRoot}>
              <Link href="#" onClick={preventDefault} color="inherit" className={classes.link}>
                모아보기
              </Link>
              <Link href="#" onClick={preventDefault} color="inherit" className={classes.link}>
                최근퀴즈
              </Link>
              <Link href="#" onClick={preventDefault} color="inherit" className={classes.link}>
                나의점수
              </Link>
            </div>

            <Button color="inherit">
              <VpnKeyOutlinedIcon className={classes.leftIcon} />
              로그인
            </Button>
          </Toolbar>
        </AppBar>
      </div>


      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password_again"
              label="Password Again"
              type="password"
              id="password_again"
              autoComplete="current-password"
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="이름"
              name="name"
              autoComplete="name"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              가입하기
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"이미 계정이 있습니까? 로그인 페이지로 이동"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </Container>
  )
}

export default MainPageTemp
