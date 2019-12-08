import React from 'react'

import UsersContainer from '../../containers/main/UsersContainer';
import CommonTemplate from '../../components/CommonTemplate';


const UsersPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <UsersContainer />
    </CommonTemplate>
  )
}

export default UsersPage
