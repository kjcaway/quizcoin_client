import React, { ReactChild } from 'react'
import { Container, CssBaseline } from '@material-ui/core';

import MenuBarContainer from '../containers/common/MenuBarContainer';
import AlertMessageBoxContainer from '../containers/common/AlertMessageBoxContainer';
import ConfirmBoxContainer from '../containers/common/ConfirmBoxContainer';

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
      <AlertMessageBoxContainer />
      <ConfirmBoxContainer />
      <Container component="main" maxWidth={maxWidth}>
        {children}
      </Container>
    </Container>
  )
}

export default CommonTemplate
