import React, { Component } from 'react'
import { history } from '../../store/configureStore';
import { connect } from 'react-redux';
import MenuBar from '../../components/common/MenuBar';
import * as auth from '../../store/actions/authActions';
import * as common from '../../store/actions/commonActions';

interface Props {
  isLogged: boolean;
  userId: string;
  logout: () => void;
  goToUrl: (payload: string) => void;
}

const menus = [
  {
    name: '출제자들',
    path: '/'
  },
  {
    name: '최근퀴즈',
    path: '/latest'
  },
  {
    name: '나의점수',
    path: '/mypage'
  },
]

class MenuBarContainer extends Component<Props>{
  handleLogin = () => {
    history.push('/signin')
  }
  handleLogout = () => {
    this.props.logout();
  }

  handleClickMenu = (url: string) => {
    this.props.goToUrl(url);
  }

  render() {
    const { isLogged } = this.props;
    return (
      <MenuBar
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        isLogged={isLogged}
        menus={menus}
        userId={this.props.userId}
        handleClickMenu={this.handleClickMenu}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      isLogged: state.auth.isLogged,
      userId: state.auth.userId || 'anonymous'
    }
  },
  (dispatch: any) => {
    return {
      logout: () => {
        dispatch({ type: auth.LOGOUT })
      },
      goToUrl: (payload: string) => {
        dispatch({type: common.GO_TO_URL, payload})
      }
    }
  }
)(MenuBarContainer);
