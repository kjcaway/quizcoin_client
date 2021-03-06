import React from 'react'

import UsersContainer from '../../containers/main/UsersContainer';
import CommonTemplate from '../../components/CommonTemplate';
import TitleContainer from '../../containers/common/TitleContainer';


const UsersPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <TitleContainer />
        <UsersContainer />
      </>
    </CommonTemplate>
  )
}

export default UsersPage
