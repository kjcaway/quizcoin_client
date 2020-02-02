import React from 'react'

import LatestContainer from '../../containers/main/LatestContainer';
import TitleContainer from '../../containers/common/TitleContainer';
import AnswerDialogContainer from '../../containers/main/AnswerDialogContainer';
import ResultDialogContainer from '../../containers/main/ResultDialogContainer';
import CommonTemplate from '../../components/CommonTemplate';


const LatestPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <TitleContainer />
        <LatestContainer />
        <AnswerDialogContainer />
        <ResultDialogContainer />
      </>
    </CommonTemplate>
  )
}

export default LatestPage
