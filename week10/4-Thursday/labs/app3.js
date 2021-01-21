const express = require('express');
const app = express();
const helmet = require('helmet');



app.use(express.static('public'));
app.use(helmet());

let authLogin = (req, res, next)=>{
    console.log('checking authent');
    next()
}

app.all('/', (req, res, next) => {
    console.log('log some data');
    next();
})

app.get('/', authLogin, (req, res, next) => {
    if(true){
        res.send('home')
    }
    else{
        next(new Error('there was an error'))
    }
    
})


app.post('/', (req, res) => {
    res.send('post')
})

app.put('/', (req, res) => {
    res.send('put')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.use(function(err, req, res, next){
    console.log('here is an error');
    console.log(err.message);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})