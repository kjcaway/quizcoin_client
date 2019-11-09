import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import MainPageTemp from './pages/temp/MainPageTemp';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>Hellod</div>}></Route>
        <Route exact path="/temp/" component={MainPageTemp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
