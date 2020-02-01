import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as auth from '../../store/actions/authActions';
import * as common from '../../store/actions/commonActions';
import { withRouter } from 'react-router-dom';

interface Props {
  tempLogin: () => void;
  checkToken: () => void;
  changeActiveMenu: (payload: string) => void;
  location: { pathname: string };
}

class Base extends Component<Props> {
  initialize = () => {
    if (localStorage.getItem('access_token')) {
      this.props.tempLogin();
    }
    // checkToken valid action need!
    this.props.checkToken();
    this.props.changeActiveMenu(this.props.location.pathname);
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.props.changeActiveMenu(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default withRouter(connect(
  null,
  (dispatch) => {
    return {
      tempLogin: () => {
        dispatch({ type: auth.TEMP_LOGIN })
      },
      checkToken: () => {
        dispatch({ type: auth.REQ_CHECK_TOKEN })
      },
      changeActiveMenu: (payload: string) => {
        dispatch({ type: common.CHANGE_ACTIVE_MENU, payload: payload})
      }
    }
  }
)(Base))
