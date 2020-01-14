import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as auth from '../../store/actions/authActions';

interface Props {
  tempLogin: () => void;
  checkToken: () => void;
}

class Base extends Component<Props> {
  initialize = () => {
    if (localStorage.getItem('access_token')) {
      this.props.tempLogin();
    }
    // checkToken valid action need!
    this.props.checkToken();
  }

  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default connect(
  null,
  (dispatch) => {
    return {
      tempLogin: () => {
        dispatch({ type: auth.TEMP_LOGIN })
      },
      checkToken: () => {
        dispatch({ type: auth.REQ_CHECK_TOKEN })
      }
    }
  }
)(Base)
