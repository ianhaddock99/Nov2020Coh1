import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './ex1/Parent';
// import App from './App';
// import FirstComponent from './FirstComponent';

let myArr = ["Jordan", "Micah", "Joe", "Jake"];


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Parent firstName="Ian" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Parent firstName={myArr[0]} />
    {/* <Parent firstName={myArr[1]} />
    <Parent firstName={myArr[2]} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);



