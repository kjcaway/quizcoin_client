import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from "history";

import rootReducer from './reducers'
import rootSaga from './sagas'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export { history };
export default store;