const express = require('express');
const app = express();
const PORT = 3000;


//ejs
app.set('view engine', 'ejs')

//public
app.use(express.static('public'))

//route references
app.use(require('./routes'))
app.use(require('./routes/aboutus'))


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})