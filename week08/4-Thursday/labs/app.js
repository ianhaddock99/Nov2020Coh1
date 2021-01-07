const express = require('express');
const app = express();

app.set('view engine', 'ejs')

//sub routes
app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/about'));



app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})