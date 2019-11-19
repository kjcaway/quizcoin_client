import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as auth from '../../store/actions/authActions'

import SignInForm from '../../components/auth/SignInForm';

interface Props {
  authStatus: string;
  fetchSignIn: (payload: auth.SignInPayload) => void;
}
interface State {
  [key:string]: string
}

class SignInContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      userId: '',
      password: ''
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
  
  handleSubmit = () => {
    this.props.fetchSignIn({
      userId : this.state.userId,
      password : this.state.password
    })
  }

  render() {
    return (
      <SignInForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      authStatus: state.auth.status
    }
  },
  (dispatch) => {
    return {
      fetchSignIn: (payload: auth.SignInPayload) => {
        dispatch({type: auth.SIGNIN, payload: payload})
      }
    }
  }
)(SignInContainer);
