const express = require('express');
const router = express.Router();

//////CALCULATE//////
router.get('/add/:num1/:num2', (req, res)=> {
    var num1 = eval(req.params.num1)
    var num2 = eval(req.params.num2)
    var sum =  (num1 + num2).toString()
    res.send(`${num1} + ${num2} = ${sum}`)
})
/////////////////

module.exports = router;