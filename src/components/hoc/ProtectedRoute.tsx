import React, { useEffect } from 'react'
import { Route, Redirect, withRouter } from 'react-router'
import { useSelector, shallowEqual } from 'react-redux'

function ProtectedRoute({ component, ...rest }: any) {
  const isLogged = useSelector((store: any) => store.auth.isLogged, shallowEqual);
  const { computedMatch } = rest;
  const userId = computedMatch.params.userId;

  useEffect(() => {
    console.log('useEffect')
    console.log(isLogged)
    return () => {
      console.log('useEffect clean!')
    };
  }, [isLogged])

  return (
    <Route {...rest} render={(props) => (
      isLogged === true ?
        React.createElement(component, props) : <Redirect to={{ pathname: '/signin' }} />
    )} />
  )
}

export default ProtectedRoute
