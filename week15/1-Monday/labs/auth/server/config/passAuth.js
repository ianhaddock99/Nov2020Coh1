const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('../secrets');

// validating a user credentials email password
//local strategy emil and password validation

//options to override username field
let options ={
    usernameField: 'email'
}

let localLogin = new LocalStrategy(options, (username, password, done)=>{
    //check to see if email is in our db
    try{
        let records =  db.user.findAll({where: {email:email}})
        if(records !== null){
            //encrypt password and compare to password in db

            bcrypt.compare(password, records[0].password, (err, isMatch)=>{
                //check if err object exists
                if(err){
                    return done(err);
                }
                //mismatching password
                if(!isMatch){
                    return done(null,false)
                }
                return done(null, records[0]);
            })

        }
        else{
            return done(null, false);
        }
    
    }
    catch{
        return done(error)
    }
});

// let jwtLogin = new JwtStrategy

passport.use(localLogin)

// passport.use(localLogin);
// passport.use(jwtLogin);

