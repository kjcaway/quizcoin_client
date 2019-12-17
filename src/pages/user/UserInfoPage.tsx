import React from 'react'

import UserInfoContainer from '../../containers/user/UserInfoContainer';
import AddTagDialogContainer from '../../containers/user/AddTagDialogContainer'
import AddQuizDialogContainer from '../../containers/quiz/AddQuizDialogContainer'
import CommonTemplate from '../../components/CommonTemplate';

// interface Props {
//   match: {
//     params: {
//       userId: string;
//     }
//   }
// }

const UserInfoPage = () => {
  return (
    <CommonTemplate maxWidth='lg'>
      <>
        <UserInfoContainer />
        <AddTagDialogContainer />
        <AddQuizDialogContainer />
      </>
    </CommonTemplate>
  )
}

export default UserInfoPage
