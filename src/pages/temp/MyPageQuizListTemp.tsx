import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container, CssBaseline, Link, Box, Card, CardMedia, CardContent, Chip, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddIcon from '@material-ui/icons/Add';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    paperRoot: {
      padding: theme.spacing(3, 2),
    },
    quizTitle: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      flexGrow: 1
    },
    quizAnswer: {
      color: '#2ec11c'
    },
    quizContent: {
      marginBottom: theme.spacing(2)
    },
    extpRoot: {
      backgroundColor: '#f0f1f1'
    }
  }),
);

const list = [1, 2, 3, 4];

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
            <CardContent className={classes.content}>
              {list.map(obj => (
                <div className={classes.quizContent}>
                  <ExpansionPanel className={classes.extpRoot}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.quizTitle}>이 세상에서 가장 큰 동물은?</Typography>
                      <Typography className={classes.quizAnswer}>코끼리</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography color="textSecondary">
                        정답자 확인 기능 추가 예정
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>  
                </div>
              ))}
            </CardContent>
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
