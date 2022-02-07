const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;


function storeUser(userName,password,cBack) {

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            console.log("storeUser, bcrypt returned an error: " + err)
            cBack(err,null)
        } else {
                let newUser = new User({
                    username: userName,
                    password:hash
                })
                newUser.save().then(user => {
                    console.log("User object: " + user)
                    cBack(null,user)
                })
                .catch(err => {
                    console.log("storeUser, Mongo returnend an error: "+err)
                    cBack(err)
                })
        }
       
    });

    
    
}



module.exports = {
    storeUser 
}