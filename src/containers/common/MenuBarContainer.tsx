import React, { Component } from 'react'
import {history} from '../../store/configureStore';

import MenuBar from '../../components/common/MenuBar';

class MenuBarContainer extends Component {
  onClickLogin = () => {
    history.push('/signin')
  }
  render() {
    return (
      <MenuBar
        onClickLogin={this.onClickLogin}
      />
    )
  }
}

export default MenuBarContainer
