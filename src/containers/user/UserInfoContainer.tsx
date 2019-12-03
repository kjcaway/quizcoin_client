import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as user from '../../store/actions/userActions'
import UserInfoProfile from '../../components/user/UserInfoProfile'
import UserInfoActivity from '../../components/user/UserInfoActivity'
import { convertToFromNow } from '../../lib/utils';
import defaultImage from '../../static/images/default_profile.png';

interface Props {
  userId: any;
  userInfo: any;
  fetchUserInfo: (payload: user.UserInfoPayload) => void;
}
interface State {
}

export class UserInfoContainer extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchUserInfo({
      userId: this.props.userId
    })
  }

  defaultToProfile = (path: string) => {
    if(path === ''){
      return defaultImage
    } else {
      return path;
    }
  }

  render() {
    return (
      <>
        <UserInfoProfile
          userId={this.props.userInfo.user_id}
          name={this.props.userInfo.name}
          profile={this.defaultToProfile(this.props.userInfo.profile)}
          createdTime={convertToFromNow(this.props.userInfo.created_time)}
        />
        <UserInfoActivity
          quizCnt={this.props.userInfo.quizcnt}
          score={this.props.userInfo.score}
          popular={this.props.userInfo.popular}
          tags={this.props.userInfo.tags}
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
      }
    }
  }
)(UserInfoContainer);