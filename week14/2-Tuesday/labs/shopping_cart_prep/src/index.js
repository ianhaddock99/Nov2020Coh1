import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart';
import Products from './components/Products'
import BaseLayout from './components/layout/BaseLayout'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/cartReducer'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/products' component={Products}/>
            
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
