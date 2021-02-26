const express = require('express');
const app = express();

app.use(require('./routes/authentications'))

app.listen(3001, ()=>{
    console.log('listening on port 3001')
})





// const jwt = require('jwt-simple'); //create a jwt token

// //user info
// let userInfo = {
//     id: '12345',
//     userName: 'Veronica',
//     email: 'me@me.com'
// }



// //create a function that returns a JWT token

// const token = (user) => {

//     let timestamp = new Date().getTime(); //current time
//     return jwt.encode({sub: user.id, name: user.userName, iat:timestamp}, "asdjkhaskjdhad;lkvf") //encode creates token
// }


// //create a jwt token calls function and pas our user info

// let jwtToken = token(userInfo);

// console.log(jwtToken)