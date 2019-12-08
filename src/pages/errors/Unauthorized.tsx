import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

function Unauthorized() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Unauthorized(401)
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'해당 페이지에 대한 권한이 없습니다.'}
        </Typography>
        <Typography variant="body1">
          <Link href="/">
            홈으로 이동
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Unauthorized
