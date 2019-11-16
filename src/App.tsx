import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import MainPage from './pages/temp/MainPageTemp';
import SignInPage from './pages/temp/SignInPageTemp';
import SignUpPage from './pages/temp/SignUpPageTemp';
import MyPage from './pages/temp/MyPageTemp';
import CreateQuiz from './pages/temp/CreateQuizTemp';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>Hellod</div>}></Route>
        <Route exact path="/temp/" component={MainPage}></Route>
        <Route exact path="/temp/signin" component={SignInPage}></Route>
        <Route exact path="/temp/signup" component={SignUpPage}></Route>
        <Route exact path="/temp/:userId" component={MyPage}></Route>
        <Route exact path="/temp/:userId/create" component={CreateQuiz}></Route>
      </Switch>
    </Router>
  );
}

export default App;
