import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import SignInPage from './pages/temp/SignInPageTemp';
import SignUpPage from './pages/temp/SignUpPageTemp';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>Hellod</div>}></Route>
        <Route exact path="/temp/signin" component={SignInPage}></Route>
        <Route exact path="/temp/signup" component={SignUpPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
