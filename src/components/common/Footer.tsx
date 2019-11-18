import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/">
        jongchan kang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Footer
