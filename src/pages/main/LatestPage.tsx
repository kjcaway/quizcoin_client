import React from 'react'

import LatestContainer from '../../containers/main/LatestContainer';
import TitleContainer from '../../containers/common/TitleContainer';
import CommonTemplate from '../../components/CommonTemplate';


const LatestPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <TitleContainer />
        <LatestContainer />
      </>
    </CommonTemplate>
  )
}

export default LatestPage
