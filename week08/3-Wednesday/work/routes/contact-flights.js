const express = require('express');
const router = express.Router();

router.get('/contact/:name', (req, res)=>{

    let userName = req.params.name

    console.log(userName);

    res.send(`Contact Us ${userName}`)
})


router.get('/flights?/:from/:to', (req, res)=>{
    res.send(`Departing from: ${req.params.from} Arriving at: ${req.params.to}`)
})



module.exports = router;