import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTagDialog from '../../components/user/AddTagDialog'
import * as user from '../../store/actions/userActions'
import * as alertMsg from '../../store/actions/alertMsgActions'
import {
  isValidName
} from '../../lib/validation'
import * as CONSTANTS from '../../lib/constants'

interface Props {
  modalOpen: boolean;
  closeAddTagDlg: () => void;
  setTag: (payload: user.TagPayload) => void;
  pushAlert: (payload: alertMsg.AlertMessagePayload) => void;
}
interface State {
  [key: string]: any
}


export class AddTagDialogContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputTag: '',
      validErrors: {
        inputTag: ''
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

  handleValidErrorMsg = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let message = this.state.validErrors;

    message[name] = !isValidName(value) && CONSTANTS.MSG_HELP_TAG

    this.setState(prevState => ({
      validErrors: {
        ...prevState.validErrors,
        [name]: message[name]
      }
    }))
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (!this.state.validErrors.inputTag) {
      this.props.setTag({tagName : this.state.inputTag})
    } else {
      this.props.pushAlert({
        message: CONSTANTS.MSG_ERROR_INVALID_INPUT,
        category: "error"
      })
    }
  }

  render() {
    return (
      <AddTagDialog
        open={this.props.modalOpen}
        handleClose={this.props.closeAddTagDlg}
        errorMessages={this.state.validErrors}
        handleInputChange={this.handleInputChange}
        handleValidErrorMsg={this.handleValidErrorMsg}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default connect(
  (state: any) => {
    return {
      modalOpen: state.user.addTagModalOpen
    }
  },
  (dispatch) => {
    return {
      closeAddTagDlg: () => {
        dispatch({ type: user.ADD_TAG_MODAL_CLOSE })
      },
      setTag: (payload: user.TagPayload) => {
        dispatch({ type: user.REQ_SET_TAG, payload : payload })
      },
      pushAlert: (payload: alertMsg.AlertMessagePayload) => {
        dispatch({ type: alertMsg.PUSH_MESSAGE, payload: payload})
      }
    }
  }
)(AddTagDialogContainer);
