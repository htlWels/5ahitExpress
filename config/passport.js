const passport = require('passport')
var LocalStrategy = require('passport-local')
const User = require('../models/userSchema')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})


passport.use('local', new LocalStrategy({
        usernameField: 'user',
        passwordField: 'password'
    },
    (user, password, done) => {
        console.log("Password: search for user: " + user)
        User.findOne({ username: user }, (err, userMongo) => {
            if (err) {
                console.log("Mongoose: search user returned an error: " + err)
                return done(err)
            }
            if (!userMongo) {
                console.log("Mongoose: User " + user + " not found")
                return done(null, null, { message: 'User not found' })
            }
            userMongo.validatePassword(password, (err, result) => {
                if (err)
                    return done(err)
                if (result)
                    done(null, userMongo, { message: 'Password is valid' })
                else {
                    done(null, null, { message: 'Password not valid' })
                }
            })

        })

    }


))