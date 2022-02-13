const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    created: {
        type: Date,
        default: Date.now
    }



})

UserSchema.methods.validatePassword = function(plainPassword, cBack) {
    bcrypt.compare(plainPassword, this.password, function(err, result) {
        // result == true

        cBack(err, result)

    });
}


module.exports = mongoose.model('User', UserSchema)