import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/layout/BaseLayout'
import Forms from './components/Forms'
import FormHook from './components/Form-Hook'
import Parent from './components/LiftingState/Parent'
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import App from './App2'; //Movie witch cache
// import StopWatch from './StopWatch';
import App from './App3';
import './assets/styles.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Sample1 from './components/Sample1'
import Sample2 from './components/Sample2'



// const About = () => <h1>About Us</h1>
// const ContactUs = () => <h1>Contact Us</h1>
// const Blog = (props) => {
//   return (
//     <>
//     <h1>Blogs</h1>

//     <h1>
//     {props.match.params.blogID}
//     </h1>

//     <h1>
//     {props.location.pathname}
//     </h1>
//     </>
//   )
// }
// const Comment = () => <h1>Comments</h1>
// const NoMatch = () => <h1>Page does not exist</h1>

const NoMatch = () => <div>Error: Not a valid URL</div>



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>

          <Route  exact path='/' component={App}/>
          <Route  path='/forms' component={Forms}/>
          <Route  path='/formhook' component={FormHook}/>
          <Route  path='/lifting_state' component={Parent}/>
          <Route  component={NoMatch}/>

          




          {/* <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/blog/:blogID" component={Blog} />
          <Redirect from="/blog" to="/" /> 
          <Route path="/blog" component={Blog} />
          <Route path="/comment" component={Comment} />
          <Route path="/sample1" component={Sample1} />
          <Route path="/sample2/:id" component={Sample2} />
          <Route path="/sample2" component={Sample2} />
          <Route component={NoMatch} /> */}

        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


