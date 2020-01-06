import React from 'react'
import ConfirmBox from '../../components/common/ConfirmBox'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as common from '../../store/actions/commonActions'


function ConfirmBoxContainer() {
  const isOpen = useSelector((state: any) => state.common.confirmModal.isOpen, shallowEqual);
  const title = useSelector((state: any) => state.common.confirmModal.title, shallowEqual);
  const contents = useSelector((state: any) => state.common.confirmModal.contents, shallowEqual);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: common.CLOSE_CONFIRM_MODAL });
  }

  const handleClickOk = () => {
    dispatch({ type: common.OK_CONFIRM_MODAL });
  }

  const handleClickCancel = () => {
    dispatch({ type: common.CANCEL_CONFIRM_MODAL });
  }

  return (
    <ConfirmBox
      title={title}
      contents={contents}
      isOpen={isOpen}
      handleClose={handleClose}
      handleClickOk={handleClickOk}
      handleClickCancel={handleClickCancel}
    />
  )
}

export default ConfirmBoxContainer
