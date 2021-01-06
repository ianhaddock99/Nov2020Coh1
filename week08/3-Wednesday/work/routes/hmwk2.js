const express = require('express');
const router = express.Router();


//////CHANGES COLOR IN BACKGROUND///////
router.get('/about', (req, res)=>{
    res.send(`
    <link rel="stylesheet" href="css/global.css">
    <h1>About Us</h1>`)
})

router.get('/cats?', (req, res)=>{
    res.send("<h1>Meow</h1>")
})

router.get('/dogs?', (req, res)=>{
    res.send("<h1>Woof</h1>")
})

module.exports = router;