import React from 'react'

import UserInfoContainer from '../../containers/user/UserInfoContainer';
import AddTagDialogContainer from '../../containers/user/AddTagDialogContainer'
import CommonTemplate from '../../components/CommonTemplate';

interface Props {
  match: {
    params: {
      userId: string;
    }
  }
}

const UserInfoPage = ({ match }: Props) => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <UserInfoContainer userId={match.params.userId} />
        <AddTagDialogContainer />
      </>
    </CommonTemplate>
  )
}

export default UserInfoPage
