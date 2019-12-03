import React from 'react'

import SignUpContainer from '../../containers/auth/SignUpContainer';
import CommonTemplate from '../../components/CommonTemplate';

const LoginPage = () => {
  return (
    <CommonTemplate maxWidth='xs'>
      <SignUpContainer />
    </CommonTemplate>
  )
}

export default LoginPage
