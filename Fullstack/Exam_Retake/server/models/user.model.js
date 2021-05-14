const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "We need a first name!"]
    },
    LastName:{
        type: String,
        required: [true, "We need a last name!"]
    },
    username:{
        type: String,
        required: [true, "We need a username!"]
    },
    email:{
        type: String,
        required: [true, "We need an email!"]
    },
    password:{
        type: String,
        required: [true, "Please protect your account with a password!"]
    },
}, {timestamps: true});

module.exports.User = mongoose.model('User', UserSchema);