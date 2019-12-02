import React from 'react'

import UserInfoContainer from '../../containers/user/UserInfoContainer';
import CommonTemplate from '../../components/CommonTemplate';

const UserInfoPage = (props: any) => {
  return (
    <CommonTemplate>
      <UserInfoContainer userId={props.match.param}/>
    </CommonTemplate>
  )
}

export default UserInfoPage
