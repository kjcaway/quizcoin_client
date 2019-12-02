import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as auth from '../../store/actions/authActions'
import SignUpForm from '../../components/auth/SignUpForm';
import {
  isValidUserId, isValidPassword, isValidName
} from '../../lib/validation'
import * as MSG from '../../lib/constants'

interface Props {
  isLogged: boolean;
  fetchSignUp: (payload: auth.SignUpPayload) => void;
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
      alert('입력 폼이 유효하지않습니다.')
    }
  }

  handleValidErrorMsg = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let message = this.state.validErrors;

    switch (name) {
      case 'userId':
        message.userId = !isValidUserId(value) && MSG.MSG_HELP_USERID
        break;
      case 'password':
        message.password = !isValidPassword(value) && MSG.MSG_HELP_PASSWORD
        break;
      case 'passwordAgain':
        const { password, passwordAgain } = this.state;
        if (password !== passwordAgain) {
          message.passwordAgain = MSG.MSG_HELP_PASSWORD_AGAIN;
        } else {
          message.passwordAgain = false;
        }
        break;
      case 'userName':
        message.userName = !isValidName(value) && MSG.MSG_HELP_NAME
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

  render() {
    const { validErrors } = this.state;
    return (
      <SignUpForm
        errorMessages={validErrors}
        handleValidErrorMsg={this.handleValidErrorMsg}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
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
        dispatch({ type: auth.SIGNUP, payload: payload })
      }
    }
  }
)(SignUpContainer);
