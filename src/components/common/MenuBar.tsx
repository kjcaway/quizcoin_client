import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // app bar
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
    linkM: {
      margin: theme.spacing(1.5),
      fontSize: '12px',
      fontStyle: 'italic'
    },
  }),
);

const MenuBar = (props: any) => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.appBarRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <EmojiEventsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {isDesktop && 'QuizCoin'}
          </Typography>
          <div className={classes.linkRoot}>
            <Link href="#" onClick={preventDefault} color="inherit" className={isDesktop?classes.link:classes.linkM}>
              모아보기
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit" className={isDesktop?classes.link:classes.linkM}>
              최근퀴즈
            </Link>
            <Link href="#" onClick={preventDefault} color="inherit" className={isDesktop?classes.link:classes.linkM}>
              나의점수
            </Link>
          </div>

          {
            props.isLogged ?
              <Button color="inherit" onClick={props.handleLogout}>
                <ExitToAppIcon className={classes.leftIcon} />
                {isDesktop && '로그아웃'}
            </Button>
              :
              <Button color="inherit" onClick={props.handleLogin}>
                <VpnKeyOutlinedIcon className={classes.leftIcon} />
                {isDesktop && '로그인'}
            </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuBar
