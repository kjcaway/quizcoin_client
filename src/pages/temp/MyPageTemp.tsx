import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container, CssBaseline, Link, Box, Card, CardMedia, CardContent, Chip } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddIcon from '@material-ui/icons/Add';
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
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    link: {
      margin: theme.spacing(1.5),
      fontSize: '18px',
      fontStyle: 'italic'
    },

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
  }),
);

const chipData = [
  { key: 0, label: 'Angular' },
  { key: 1, label: 'jQuery' },
  { key: 2, label: 'Polymer' },
  { key: 3, label: 'React' },
  { key: 4, label: 'Vue.js' },
]

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

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
        <div className={classes.infoRoot}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image="https://source.unsplash.com/random"
              title="Live from space album cover"
            />
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
                    kjcaway
                  </Typography>
                </Box>
                <Box className={classes.textLabel}>
                  <Typography component="h4">
                    이름 : 
                  </Typography>
                  <Typography className={classes.textValue}>
                    테스터
                  </Typography>
                </Box>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Box className={classes.textLabel}>
                  <Typography component="h4">
                    나의 문제 수 : 
                  </Typography>
                  <Typography className={classes.textValue}>
                    2
                  </Typography>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    className={classes.btnMake}
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
                    80
                  </Typography>
                </Box>
                <Box className={classes.textLabel}>
                  <Typography component="h4">
                    인기도 : 
                  </Typography>
                  <Typography className={classes.textValue}>
                    21
                  </Typography>
                </Box>
                <Box className={classes.textLabel}>
                  <Typography component="h4">
                    태그 : 
                  </Typography>
                  <Typography className={classes.textValue}>
                    {chipData.map(data => {
                      let icon;

                      return (
                        <Chip
                          key={data.key}
                          icon={icon}
                          label={data.label}
                          onDelete={handleDelete}
                          className={classes.chip}
                        />
                      );
                    })}
                  </Typography>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    className={classes.btnMake}
                  >
                    태그 추가
                    <AddIcon className={classes.rightIcon} />
                  </Button>
                </Box>
                
              </CardContent>
            </div>
          </Card>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </Container>
  )
}

export default MainPageTemp
