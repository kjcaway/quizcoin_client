import React, { Component } from 'react'
import {history} from '../../store/configureStore';
import {connect } from 'react-redux';
import MenuBar from '../../components/common/MenuBar';

interface Props {
  isLogged?: boolean;
}
class MenuBarContainer extends Component<Props>{
  onClickLogin = () => {
    history.push('/signin')
  }
  render() {
    return (
      <MenuBar
        onClickLogin={this.onClickLogin}
        isLogged={this.props.isLogged}
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
  null
)(MenuBarContainer);
