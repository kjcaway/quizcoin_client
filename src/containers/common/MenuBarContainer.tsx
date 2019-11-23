import React, { Component } from 'react'
import {history} from '../../store/configureStore';
import {connect } from 'react-redux';
import MenuBar from '../../components/common/MenuBar';
import * as auth from '../../store/actions/authActions';

interface Props {
  isLogged: boolean;
  logout: () => void;
}
class MenuBarContainer extends Component<Props>{
  handleLogin = () => {
    history.push('/signin')
  }
  handleLogout = () => {
    localStorage.removeItem('access_token');
    this.props.logout();
  }
  render() {
    const {isLogged} = this.props;
    return (
      <MenuBar
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        isLogged={isLogged}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      isLogged: state.auth.isLogged
    }
  },
  (dispatch: any) => {
    return {
      logout: () => {
        dispatch({type: auth.LOGOUT})
      } 
    }
  }
)(MenuBarContainer);
