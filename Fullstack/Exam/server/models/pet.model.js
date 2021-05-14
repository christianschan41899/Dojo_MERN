const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "We need a name so we can idenity your animal!"]
    },
    species:{
        type: String,
        required: [true, "Unless you found a new species, we need to know what kind of animal it is!"]
    },
    description:{
        type: String,
        required: [true, "Describe the animal so our adoptees know if the animal is right for them!"]
    },
    skills: [String]
}, {timestamps: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);