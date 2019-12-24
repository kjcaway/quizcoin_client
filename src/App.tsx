import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './store/configureStore';
import Base from './containers/common/Base';
import UsersPage from './pages/main/UsersPage'
import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import LatestPage from './pages/main/LatestPage';
import UserInfoPage from './pages/user/UserInfoPage';
import UserQuizListPage from './pages/user/UserQuizListPage';
import NotFound from './pages/errors/NotFound';
import ProtectedRoute from './components/hoc/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={UsersPage}></Route>
        <Route path="/signin" component={LoginPage}></Route>
        <Route path="/signup" component={JoinPage}></Route>
        <Route exact path="/latest" component={LatestPage}></Route>
        <Route path="/latest/@:userId" component={LatestPage}></Route>
        <ProtectedRoute exact path="/mypage" component={UserInfoPage}></ProtectedRoute>
        <ProtectedRoute path="/mypage/quizList" component={UserQuizListPage}></ProtectedRoute>
        <Route component={NotFound}></Route>
      </Switch>
      <Base />
    </Router>
  );
}

export default App;
