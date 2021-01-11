const express = require('express');
const app = express();



//ejs
app.set('view engine', 'ejs')

//public
app.use(express.static('public'))

//route references
app.use(require('./routes'))
app.use(require('./routes/forum'))


app.listen(3000, ()=>{
    console.log(`Server running on port 3000`);
})