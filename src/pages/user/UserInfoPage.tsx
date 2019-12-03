import React from 'react'

import UserInfoContainer from '../../containers/user/UserInfoContainer';
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
    <CommonTemplate>
      <UserInfoContainer userId={match.params.userId} />
    </CommonTemplate>
  )
}

export default UserInfoPage
