import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector, shallowEqual } from 'react-redux'
import Unauthorized from '../../pages/errors/Unauthorized'
import ProgressCilrcle from '../common/ProgressCilrcle'

function ProtectedRoute({ component, ...rest }: any) {
  const isLogged = useSelector((store: any) => store.auth.isLogged, shallowEqual);
  const isCheckingToken = useSelector((store: any) => store.auth.isCheckingToken, shallowEqual);
  const userId = useSelector((store: any) => store.auth.userId, shallowEqual);
  const { computedMatch } = rest;
  const paramUserId = computedMatch.params.userId;

  return (
    <Route {...rest} render={(props) => {
      if (isCheckingToken) {
        return <ProgressCilrcle />
      } else if (isLogged) {
        return React.createElement(component, props)
      // } else if (isLogged && (userId !== paramUserId)) {
      //   return <Unauthorized />
      } else {
        return <Redirect to={{ pathname: '/signin' }} />
      }
    }} />
  )
}

export default ProtectedRoute
