import React, { Component } from 'react'
import { connect } from 'react-redux';
import AlertMessageBox from '../../components/common/AlertMessageBox';
import * as alertMsg from '../../store/actions/alertMsgActions'

interface Props {
  category: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
}
interface State {
}

class AlertMessageBoxContainer extends Component<Props, State> {
  render() {
    return (
      <AlertMessageBox
        category={this.props.category}
        message={this.props.message}
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      isOpen: state.alertMsg.isOpen,
      message: state.alertMsg.message,
      category: state.alertMsg.category
    }
  },
  (dispatch) => {
    return {
      onClose: () => {
        dispatch({ type: alertMsg.HIDE_MESSAGE })
      }
    }
  }
)(AlertMessageBoxContainer);
