const express = require('express');
const router = express.Router();
const db = require('../models/database');

router.use(express.urlencoded({extended: false}));
router.use(express.json());



router.get('/newdish', (req, res) => {

    db.query('SELECT * FROM categories')
    .then(records =>{

        res.render('newdish', {
            categories: records
        });


    })

});

router.post('/newdish', (req,res) => {
    let name = req.body.name;
    let category = req.body.category;
    let fooddescription = req.body.description;
    let price = parseFloat(req.body.price);
    let imageURL
})

module.exports = router;