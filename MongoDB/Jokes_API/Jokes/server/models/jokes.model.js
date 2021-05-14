const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "Can't have a joke with no wind up!"],
        minlength: [10, "Your wind up is too quick! (Needs 10 characters or more!)"]
    },
    punchline:{
        type: String,
        required: [true, "Can't leave a joke hanging!"],
        minlength: [3, "That punchline is too short! (Needs 3 characters or more!)"]
    },

});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;