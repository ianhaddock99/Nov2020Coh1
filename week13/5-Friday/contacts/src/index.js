import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layout/BaseLayout'
import ContactApp from './components/ContactApp/ContactApp'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>

          <Route  exact path='/' component={App}/>
          <Route  path='/contact_app' component={ContactApp}/>

        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


