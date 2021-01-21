const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: ['asdjaskdfjsdfjidfi'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.get('/', (req,res) => {

    req.session.lname = "Haddock";
    req.session.fName = "Ian";
    res.send('home page');
})

app.get('/about', (req,res) => {

    res.send(`${req.session.fName} ${req.session.lName}`);
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})