const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs'); //encrypt passwords
const db = require('../models');
const config = require('../secrets')

router.use(express.urlencoded({extended: false})); //scrape email and password from request header
router.use(express.json());


const jwt = require('jwt-simple');
const passport = require('passport');
require('../config/passAuth')


let  requireSignIn = passport.authenticate('local', {session: false});


//this function returns a JWT
const token = (user) => {
  let timestamp = new Date().getTime();
  return jwt.encode({sub:user.id, iat: timestamp}, config.secret)
}




router.get('/', (req, res)=>{
    res.send('hello world');
});

router.post('/signin', requireSignIn, (req, res) => {
    //validate user

    //send token
    res.json({token: token(req.user)})
})

router.post('/signup', async (req, res) => {
  //register user in our DB
  //body-parse to scrape info
  //email, password
    let email = req.body.email;
    //encrpyt: bcrypt
    let password = bcrypt.hashSync(req.body.password, 8);
  //models - store in database
    try{
    let records = await db.user.findAll({where: {email: email}})

    if(records.length === 0){
        let user = await db.user.create({email: email, password: password})

        let jwtToken = token(user) //token returns a jwt

        return res.json({token: jwtToken}) //passing a jwt to client
    }
    else{
        return res.status(422).send({error: 'Email alreaedy exits'})
    }
} catch (error) {
    return res.status(423).send({error: `Can not access database`})
}
  //create jwt token

  //send back a token
})


module.exports = router;