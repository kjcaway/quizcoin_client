import React, { useEffect } from 'react'
import CardList from '../../components/main/CardList'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as main from '../../store/actions/mainActions'
import ProgressCilrcle from '../../components/common/ProgressCilrcle'

// eslint-disable-next-line
function UsersContainer() {
  const status = useSelector((store: any) => store.main.status, shallowEqual)
  const userList = useSelector((store: any) => store.main.userList, shallowEqual)
  const dispatch = useDispatch();

  const getUsers = (payload: main.GetUsersPayload) => {
    dispatch({ type: main.GET_USERS, payload: payload });
  };

  useEffect(() => {
    getUsers({
      limit: 9,
      offset: 0
    })
    return () => {
      console.log('useEffect clean.')
    };
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        status === 'SUCCESS' ?
          <CardList
            users={userList}
          /> :
          <ProgressCilrcle />
      }
    </>
  )

}

export default UsersContainer
