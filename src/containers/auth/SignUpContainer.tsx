import React, { Component } from 'react'
import {connect } from 'react-redux';
import * as auth from '../../store/actions/authActions'
import SignUpForm from '../../components/auth/SignUpForm';
import {
  isValidUserId
} from '../../lib/validation'
import * as MSG from '../../lib/constants'

interface Props {
  isLogged: boolean;
  fetchSignUp: (payload: auth.SignUpPayload) => void;
}
interface State {
  [key:string]: any
}

class SignUpContainer extends Component<Props, State>  {
  constructor(props: Props){
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
    this.props.fetchSignUp({
      userId : this.state.userId,
      password : this.state.password,
      userName: this.state.userName
    })
  }

  getValidErrorMsg = (key: string, value: string) => {
    let message = this.state.validErrors;

    switch (key) {
      case 'userId': 
      message.userId = !isValidUserId(value) && MSG.MSG_SIGNIN_FAIL
        break;
      default:
        break;
    }
    this.setState({
      validErrors: {
        [key]: message[key]
      }
    })

  }
  render() {
    return (
      <SignUpForm 
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
        dispatch({type: auth.SIGNUP, payload: payload})
      }
    }
  }
)(SignUpContainer);
