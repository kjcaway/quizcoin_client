import React from 'react'

import UserInfoContainer from '../../containers/user/UserInfoContainer';
import UserQuizListContainer from '../../containers/user/UserQuizListContainer';
import CommonTemplate from '../../components/CommonTemplate';


const UserQuizListPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
        <UserQuizListContainer />
    </CommonTemplate>
  )
}

export default UserQuizListPage
