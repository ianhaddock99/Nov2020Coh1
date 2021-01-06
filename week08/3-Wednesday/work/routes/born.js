const express = require('express');
const router = express.Router();



router.get('/year/:num1', (req, res)=> {
    var num1 = eval(2020 - req.params.num1)
    res.send(` You were born on ${num1}`)
})

module.exports = router;