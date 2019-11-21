import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import MainPage from './pages/temp/MainPageTemp';
import SignInPage from './pages/temp/SignInPageTemp';
import SignUpPage from './pages/temp/SignUpPageTemp';
import MyPage from './pages/temp/MyPageTemp';
import MyPageQuizList from './pages/temp/MyPageQuizListTemp';
import CreateQuiz from './pages/temp/CreateQuizTemp';

import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import Base from './containers/common/Base';
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>Hellod</div>}></Route>
        <Route exact path="/signin" component={LoginPage}></Route>
        <Route exact path="/signup" component={JoinPage}></Route>

        <Route exact path="/temp/" component={MainPage}></Route>
        <Route exact path="/temp/signin" component={SignInPage}></Route>
        <Route exact path="/temp/signup" component={SignUpPage}></Route>
        <Route exact path="/temp/:userId" component={MyPage}></Route>
        <Route exact path="/temp/:userId/list" component={MyPageQuizList}></Route>
        <Route exact path="/temp/:userId/create" component={CreateQuiz}></Route>
      </Switch>
      <Base />
    </Router>
  );
}

export default App;
