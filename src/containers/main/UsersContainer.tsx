import React, { useEffect } from 'react'
import UserCardList from '../../components/main/UserCardList'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import * as main from '../../store/actions/mainActions'
import * as common from '../../store/actions/commonActions'
import ProgressCircle from '../../components/common/ProgressCircle'

// eslint-disable-next-line
function UsersContainer() {
  const status = useSelector((store: any) => store.main.status, shallowEqual)
  const userList = useSelector((store: any) => store.main.userList, shallowEqual)
  const loggedUserId = useSelector((store: any) => store.auth.userId)
  const dispatch = useDispatch();

  const getUsers = (payload: main.GetUsersPayload) => {
    dispatch({ type: main.REQ_GET_USERS, payload: payload });
  };

  const handleClickGoUserQuizList = (payload: string) => {
    const userId = payload;
    const url = `/latest/@${userId}`
    dispatch({type: common.GO_TO_URL, payload: url})
  }

  useEffect(() => {
    getUsers({
      limit: 27,
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
          <UserCardList
            users={userList}
            loggedUserId={loggedUserId}
            handleClickGoUserQuizList={handleClickGoUserQuizList}
          /> :
          <ProgressCircle />
      }
    </>
  )

}

export default UsersContainer
