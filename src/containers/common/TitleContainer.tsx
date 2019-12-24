import React from 'react'
import { withRouter } from 'react-router-dom';
import Title from '../../components/common/Title'

function TitleContainer(props: any) {
  const { pathname } = props.location
  const { userId } = props.match.params
  const getTitleInfo = (pathname: string) => {
    let title = ''
    let description = ''
    if(pathname === '/'){
      title = '출제자들'
      description = '퀴즈를 출제한 사용자 목록입니다. 문제풀기를 누르면 해당 출제자의 쿼즈 목록으로 이동합니다.'
    } else if(pathname === '/latest') {
      title = '최근 퀴즈'
      description = '가장 최근에 등록된 퀴즈 목록입니다. 퀴즈를 풀어 점수를 쌓아보세요.'
    } else if(pathname === `/latest/@${userId}`) {
      title = `"${userId}" 님의 퀴즈`
      description = `"${userId}" 님이 출제한 퀴즈 목록입니다.`
    }

    return {
      title,
      description
    }
  }

  return (
    <Title 
      title={getTitleInfo(pathname).title}
      description={getTitleInfo(pathname).description}
    />
  )
}

export default withRouter(TitleContainer)
