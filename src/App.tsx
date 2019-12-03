import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './store/configureStore';

import MainPage from './pages/temp/MainPageTemp';
import SignInPage from './pages/temp/SignInPageTemp';
import SignUpPage from './pages/temp/SignUpPageTemp';
import MyPage from './pages/temp/MyPageTemp';
import MyPageQuizList from './pages/temp/MyPageQuizListTemp';
import CreateQuiz from './pages/temp/CreateQuizTemp';

import Base from './containers/common/Base';
import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import UserInfoPage from './pages/user/UserInfoPage';
import NotFound from './pages/errors/NotFound';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>Hellod</div>}></Route>
        <Route path="/signin" component={LoginPage}></Route>
        <Route path="/signup" component={JoinPage}></Route>
        <Route exact path="/@:userId" component={UserInfoPage}></Route>
        <Route component={NotFound}></Route>

        <Route exact path="/temp/" component={MainPage}></Route>
        <Route path="/temp/signin" component={SignInPage}></Route>
        <Route path="/temp/signup" component={SignUpPage}></Route>
        <Route path="/temp/:userId" component={MyPage}></Route>
        <Route path="/temp/:userId/list" component={MyPageQuizList}></Route>
        <Route path="/temp/:userId/create" component={CreateQuiz}></Route>
      </Switch>
      <Base />
    </Router>
  );
}

export default App;
