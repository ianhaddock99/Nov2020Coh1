import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './reducers/counterReducer'
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ViewCount from './components/ViewCount'
import CountHooks from './components/CountHooks'
import ViewCountHooks from './components/ViewCountHooks'
import BaseLayout from './components/layout/BaseLayout'

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <BaseLayout>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/count" component={ViewCount} />
        <Route path="/count_hooks" component={CountHooks} />
        <Route path="/count_view_hooks" component={ViewCountHooks} />
      </Switch>
      </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


