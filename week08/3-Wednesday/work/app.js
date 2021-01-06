const express = require('express');
const app = express()
app.use(express.static('public'))

app.use(require('./routes/index')) ///// NEED TO ACCESS INDEX.JS////////////////

app.use(require('./routes/hmwk2'))

app.use(require('./routes/doglist'))

app.use(require('./routes/contact-flights'))

app.use(require('./routes/calculate'))

app.use(require('./routes/hmwk3'))

app.use(require('./routes/born'))

/// This is Ian

app.listen(3000, ()=>{
    console.log("Running on port 3000");
})