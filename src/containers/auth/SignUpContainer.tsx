import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as auth from '../../store/actions/authActions'
import * as alertMsg from '../../store/actions/alertMsgActions'
import * as common from '../../store/actions/commonActions';
import SignUpForm from '../../components/auth/SignUpForm';
import {
  isValidUserId, isValidPassword, isValidName
} from '../../lib/validation'
import * as CONSTANTS from '../../lib/constants'

interface Props {
  isLogged: boolean;
  fetchSignUp: (payload: auth.SignUpPayload) => void;
  goToUrl: (payload: string) => void;
  pushAlert: (payload: alertMsg.AlertMessagePayload) => void;
}
interface State {
  [key: string]: any
}

class SignUpContainer extends Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      passwordAgain: '',
      userName: '',
      validErrors: {
        userId: '',
        password: '',
        passwordAgain: '',
        userName: '',
      }
    }
  }

  handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (!this.state.validErrors.userId
      && !this.state.validErrors.password
      && !this.state.validErrors.passwordAgain
      && !this.state.validErrors.userName) {

      this.props.fetchSignUp({
        userId: this.state.userId,
        password: this.state.password,
        userName: this.state.userName
      })
    } else {
      this.props.pushAlert({
        message: CONSTANTS.MSG_ERROR_INVALID_INPUT,
        category: "error"
      })
    }
  }

  handleValidErrorMsg = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let message = this.state.validErrors;

    switch (name) {
      case 'userId':
        message.userId = !isValidUserId(value) && CONSTANTS.MSG_HELP_USERID
        break;
      case 'password':
        message.password = !isValidPassword(value) && CONSTANTS.MSG_HELP_PASSWORD
        break;
      case 'passwordAgain':
        const { password, passwordAgain } = this.state;
        if (password !== passwordAgain) {
          message.passwordAgain = CONSTANTS.MSG_HELP_PASSWORD_AGAIN;
        } else {
          message.passwordAgain = false;
        }
        break;
      case 'userName':
        message.userName = !isValidName(value) && CONSTANTS.MSG_HELP_NAME
        break;
      default:
        break;
    }
    this.setState(prevState => ({
      validErrors: {
        ...prevState.validErrors,
        [name]: message[name]
      }
    }))
  }

  handleClickSignIn = () => {
    this.props.goToUrl('/signin');
  }

  render() {
    const { validErrors } = this.state;
    return (
      <SignUpForm
        errorMessages={validErrors}
        handleValidErrorMsg={this.handleValidErrorMsg}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleClickSignIn={this.handleClickSignIn}
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
  (dispatch) => {
    return {
      fetchSignUp: (payload: auth.SignUpPayload) => {
        dispatch({ type: auth.REQ_SIGNUP, payload: payload })
      },
      goToUrl: (payload: string) => {
        dispatch({type: common.GO_TO_URL, payload})
      },
      pushAlert: (payload: alertMsg.AlertMessagePayload) => {
        dispatch({ type: alertMsg.PUSH_MESSAGE, payload: payload})
      }
    }
  }
)(SignUpContainer);
