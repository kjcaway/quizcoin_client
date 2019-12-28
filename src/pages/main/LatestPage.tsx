import React from 'react'

import LatestContainer from '../../containers/main/LatestContainer';
import TitleContainer from '../../containers/common/TitleContainer';
import AnswerDialogContainer from '../../containers/main/AnswerDialogContainer';
import CommonTemplate from '../../components/CommonTemplate';


const LatestPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <TitleContainer />
        <LatestContainer />
        <AnswerDialogContainer />
      </>
    </CommonTemplate>
  )
}

export default LatestPage
