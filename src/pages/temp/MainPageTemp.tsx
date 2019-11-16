import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container, CssBaseline, Link, Grid, Box, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
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
      flexGrow: 10,
    },
    linkRoot: {
      flexGrow: 9,
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
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    link: {
      margin: theme.spacing(1.5),
      fontSize: '18px',
      fontStyle: 'italic'
    },

    // card
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
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
      marginBottom: theme.spacing(2),
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
    }
  }),
);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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


      <Container component="main" maxWidth="lg">

        <Grid container spacing={4} className={classes.cardGrid}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    UserId
                  </Typography>
                  <Box className={classes.pointLabel}>
                    <Typography component="h4">
                      점수 : 
                    </Typography>
                    <Typography className={classes.pointNum}>
                      80
                    </Typography>
                  </Box>
                  <Box className={classes.pointLabel}>
                    <Typography component="h4">
                      인기도 : 
                    </Typography>
                    <Typography className={classes.pointNum}>
                      21
                    </Typography>
                  </Box>
                </CardContent>
                <div className={classes.tags}>
                  <Chip size="small" label="축구" />
                  <Chip size="small" label="농구" />
                  <Chip size="small" label="스포츠" />
                </div>
                <CardActions>
                  <Button size="large" color="primary">
                    문제 풀러가기
                    <DirectionsRunIcon className={classes.rightIcon} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </Container>
  )
}

export default MainPageTemp
