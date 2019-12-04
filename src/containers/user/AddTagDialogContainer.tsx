import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTagDialog from '../../components/user/AddTagDialog'
import * as user from '../../store/actions/userActions'
import {
  isValidName
} from '../../lib/validation'
import * as MSG from '../../lib/constants'

interface Props {
  modalOpen: boolean;
  closeAddTagDlg: () => void;
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

    message[name] = !isValidName(value) && MSG.MSG_HELP_TAG

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
      //! fetch 코드 추가 
    } else {
      alert('입력 폼이 유효하지않습니다.')
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
      }
    }
  }
)(AddTagDialogContainer);
