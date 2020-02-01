import React, { Component } from 'react'
import { history } from '../../store/configureStore';
import { connect } from 'react-redux';
import MenuBar from '../../components/common/MenuBar';
import * as auth from '../../store/actions/authActions';
import * as common from '../../store/actions/commonActions';

interface Props {
  isLogged: boolean;
  userId: string;
  menus: Array<Object>;
  logout: () => void;
  goToUrl: (payload: string) => void;
}

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
    const { isLogged, userId, menus } = this.props;
    return (
      <MenuBar
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        handleClickMenu={this.handleClickMenu}
        isLogged={isLogged}
        menus={menus}
        userId={userId}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      isLogged: state.auth.isLogged,
      userId: state.auth.userId || 'anonymous',
      menus: state.common.menus
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
