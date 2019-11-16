import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container, CssBaseline, Link, Box, FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid, TextField, ListItem, ListItemIcon, Checkbox, ListItemText, List } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
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

    // createQuiz
    createRoot: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    listRoot: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    btnHelp: {
      display:'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    }
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


      <Container component="main" maxWidth="lg">
        <div className={classes.createRoot}>
          <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            퀴즈 생성
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            퀴즈를 만들어 보세요. 객관식 또는 주관식으로 만들 수 있습니다.
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl required className={classes.formControl} fullWidth>
                  <InputLabel id="target-label">문제유형</InputLabel>
                  <Select
                    labelId="target-label"
                    id="target"
                    value={undefined}
                    onChange={undefined}
                  >
                    <MenuItem value={'1'}>객관식</MenuItem>
                    <MenuItem value={'2'}>주관식</MenuItem>
                  </Select>
                  <FormHelperText>필수입력</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="question"
                  label="문제"
                  name="question"
                  autoComplete="question"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="answer"
                  label="정답"
                  name="answer"
                  autoComplete="answer"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="item"
                    label="보기"
                    name="item"
                    
                  />
                </Grid>
                <Grid item xs={6} className={classes.btnHelp}>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                  >
                    추가
                  </Button>
                  <Typography>* 체크한 항목이 정답이 됩니다.</Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <List className={classes.listRoot}>
                  {[0, 1, 2, 3].map(value => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} role={undefined} dense button onClick={undefined}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            //checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Item ${value + 1}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              만들기
            </Button>
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
