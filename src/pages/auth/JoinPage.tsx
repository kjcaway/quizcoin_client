import React from 'react'
import { Container, CssBaseline, Box } from '@material-ui/core';

import MenuBarContainer from '../../containers/common/MenuBarContainer';
import SignUpContainer from '../../containers/auth/SignUpContainer';
import Footer from '../../components/common/Footer';

const LoginPage = () => {
  return (
    <Container
      maxWidth="xl"
      style={{paddingLeft: 0, paddingRight: 0}}
    >
      <CssBaseline />
      <MenuBarContainer />
      <Container component="main" maxWidth="xs">
        <SignUpContainer/>
        <Box mt={8}>
          <Footer />
        </Box>
      </Container>
    </Container>
  )
}

export default LoginPage
