const passport = require('passport')
var LocalStrategy = require('passport-local')
const User = require('../models/userSchema')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })
})


passport.use('local',new LocalStrategy(
    {
        usernameField:'user',
        passwordField:'password'

    },
    (user,password,done) => {
        //https://mongoosejs.com/docs/api.html#model_Model.findOne
       User.findOne( {username:user},(err,user)=>{
           if (err) {
               console.log("Passwport: searching user: "+user+ " returned an error: " + err )
               return done(err)
           }
           if (!user) {
               console.log("Passport: User: "+user+" not found")
               return done(null,null, {messsage: "User not found"})
           }
           user.validatePassword(password,(err,doMatch)=>{
            if (err) {
                console.log("Passwport:validate password for user: "+user+ " returned an error: " + err )
                return done(err)
            }
            done(null,doMatch)  
           /*  if (doMatch) 
                done(null,true,{message: "User authorized"})    
            else
                 done(null,false,{message: "Wrong password"})  */  
           })
       })

    }))
