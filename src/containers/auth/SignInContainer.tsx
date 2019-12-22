import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../store/actions/authActions'
import SignInForm from '../../components/auth/SignInForm';
import * as common from '../../store/actions/commonActions';


interface Props {
  isLogged: boolean;
  fetchSignIn: (payload: auth.SignInPayload) => void;
  goToUrl: (payload: string) => void;
}
interface State {
  [key: string]: string
}

class SignInContainer extends Component<Props, State> {
  constructor(props: Props) {
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

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.fetchSignIn({
      userId: this.state.userId,
      password: this.state.password
    })
  }

  handleClickSignUp = () => {
    this.props.goToUrl('/signup');
  }

  render() {
    return (
      <SignInForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleClickSignUp={this.handleClickSignUp}
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
      fetchSignIn: (payload: auth.SignInPayload) => {
        dispatch({ type: auth.SIGNIN, payload: payload })
      },
      goToUrl: (payload: string) => {
        dispatch({type: common.GO_TO_URL, payload})
      }
    }
  }
)(SignInContainer);
