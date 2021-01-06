const express = require('express');
const router = express.Router();

router.get("/greet/:name", (req, res)=> {
    
    let userName = req.params.name

    console.log(userName);

    res.send(`Hello, ${userName}!`)
})



module.exports = router;