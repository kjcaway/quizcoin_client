import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as user from '../../store/actions/userActions'
import * as quiz from '../../store/actions/quizActions'
import UserInfoProfile from '../../components/user/UserInfoProfile'
import UserInfoActivity from '../../components/user/UserInfoActivity'
import { convertToFromNow } from '../../lib/utils';
import {defaultToProfile} from '../../lib/utils';


interface Props {
  userId: any;
  userInfo: any;
  fetchUserInfo: (payload: user.UserInfoPayload) => void;
  openAddTagDlg: () => void;
  openAddQuizDlg: () => void;
  delTag: (payload: user.TagPayload) => void;
}
interface State {
}

export class UserInfoContainer extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchUserInfo({
      userId: this.props.userId
    })
  }

  render() {
    return (
      <>
        <UserInfoProfile
          userId={this.props.userInfo.user_id}
          name={this.props.userInfo.name}
          profile={defaultToProfile(this.props.userInfo.profile)}
          createdTime={convertToFromNow(this.props.userInfo.created_time)}
        />
        <UserInfoActivity
          quizCnt={this.props.userInfo.quizcnt}
          score={this.props.userInfo.score}
          popular={this.props.userInfo.popular}
          tags={this.props.userInfo.tags}
          handleAddTagClick={this.props.openAddTagDlg}
          handleAddQuizClick={this.props.openAddQuizDlg}
          handleDeleteTagClick={this.props.delTag}
        />
      </>
    );
  }
}


export default connect(
  (state: any) => {
    return {
      userInfo: state.user.data || {}
    }
  },
  (dispatch) => {
    return {
      fetchUserInfo: (payload: user.UserInfoPayload) => {
        dispatch({ type: user.GET_USER_INFO, payload: payload })
      },
      openAddTagDlg: () => {
        dispatch({ type: user.ADD_TAG_MODAL_OPEN })
      },
      openAddQuizDlg: () => {
        dispatch({ type: quiz.OPEN_QUIZ_MODAL})
      },
      delTag: (payload: user.TagPayload) => {
        dispatch({ type: user.DEL_TAG, payload : payload })
      }
    }
  }
)(UserInfoContainer);
