import React from 'react'

import SignInContainer from '../../containers/auth/SignInContainer';
import CommonTemplate from '../../components/CommonTemplate';

const LoginPage = () => {
  return (
    <CommonTemplate>
      <SignInContainer/>
    </CommonTemplate>
  )
}

export default LoginPage
