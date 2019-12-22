import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as user from '../../store/actions/userActions'
import * as quiz from '../../store/actions/quizActions'
import * as common from '../../store/actions/commonActions';
import UserInfoProfile from '../../components/user/UserInfoProfile'
import UserInfoActivity from '../../components/user/UserInfoActivity'
import { convertToFromNow } from '../../lib/utils';
import { defaultToProfile } from '../../lib/utils';
import _ from 'lodash';

interface Props {
  userId: string;
  userInfo: any;
  fetchUserInfo: (payload: user.UserInfoPayload) => void;
  openAddTagDlg: () => void;
  openAddQuizDlg: () => void;
  delTag: (payload: user.TagPayload) => void;
  goToUrl: (payload: string) => void;
  preLoadImage: (payload: string) => void;
}
interface State {
}

export class UserInfoContainer extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchUserInfo({
      userId: this.props.userId
    })
  }

  handleClickMyQuizCnt = () => {
    this.props.goToUrl('/mypage/quizList');
  }

  handleClickProfile = () => {
    const fileInput = document.getElementById("profile_file")!;
    fileInput.click();
  }

  handleChangeFile = (event: any) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if(base64){
        this.props.preLoadImage(base64.toString())
      }
    }
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0])
    }
  }

  render() {
    return (
      <>
        <div style={{ display: "none" }}>
          <input type="file" name="profile_file" id="profile_file" onChange={this.handleChangeFile} />
        </div>
        <UserInfoProfile
          userId={this.props.userInfo.user_id}
          name={this.props.userInfo.name}
          profile={defaultToProfile(this.props.userInfo.profile)}
          createdTime={convertToFromNow(this.props.userInfo.created_time)}
          handleClickProfile={this.handleClickProfile}
        />
        <UserInfoActivity
          quizCnt={this.props.userInfo.quizcnt}
          score={this.props.userInfo.score}
          popular={this.props.userInfo.popular}
          tags={this.props.userInfo.tags}
          handleAddTagClick={this.props.openAddTagDlg}
          handleAddQuizClick={this.props.openAddQuizDlg}
          handleDeleteTagClick={this.props.delTag}
          handleClickMyQuizCnt={this.handleClickMyQuizCnt}
        />
      </>
    );
  }
}


export default connect(
  (state: any) => {
    return {
      userInfo: state.user.data || {},
      userId: state.auth.userId
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
        dispatch({ type: quiz.OPEN_QUIZ_MODAL })
      },
      delTag: (payload: user.TagPayload) => {
        dispatch({ type: user.DEL_TAG, payload: payload })
      },
      goToUrl: (payload: string) => {
        dispatch({ type: common.GO_TO_URL, payload })
      },
      preLoadImage: (payload: any) => {
        dispatch({ type: user.PROFILE_PRELOAD, payload })
      }
    }
  }
)(UserInfoContainer);
