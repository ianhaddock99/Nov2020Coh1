const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/dishes'))
app.use(require('./routes/newdish'))


app.listen(3000, (req,res)=>{

    console.log(`Server running on port 3000`);

})