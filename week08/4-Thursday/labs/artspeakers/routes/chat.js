const express = require('express');
const router = express.Router();


router.get('/chat', (req,res) => {

    
    res.render('chat', {
        pageID = "chat",
        pageTitle: "Rouze Chat"
    });

})

module.exports = router;