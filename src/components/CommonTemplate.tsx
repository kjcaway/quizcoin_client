import React, { ReactChild } from 'react'
import { Container, CssBaseline, Box } from '@material-ui/core';

import MenuBarContainer from '../containers/common/MenuBarContainer';
import AlertMessageContainer from '../containers/common/AlertMessageContainer';
import Footer from './common/Footer';

interface Props {
  children: ReactChild,
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl"
}

const CommonTemplate = ({ children, maxWidth }: Props) => {
  return (
    <Container
      maxWidth="xl"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <CssBaseline />
      <MenuBarContainer />
      <AlertMessageContainer />
      <Container component="main" maxWidth={maxWidth}>
        {children}
        <Box mt={8}>
          <Footer />
        </Box>
      </Container>
    </Container>
  )
}

export default CommonTemplate
