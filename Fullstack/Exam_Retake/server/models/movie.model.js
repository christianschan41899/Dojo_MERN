const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    creator:{
        type: String,
        required: [true, "A review cannot have no reviewer!"]
    },
    rating:{
        type: Number,
        required: [true, "You cannot create a review without rating the movie!"]
    },
    reviewText: {
        type: String,
        required: [true, "Please leave your thoughts on the movie!"]
    }
}, {timestamps: true});

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Movies must have titles!"]
    },
    reviews: [ReviewSchema]
}, {timestamps: true});


module.exports.Review = mongoose.model('Review', ReviewSchema);
module.exports.Movie = mongoose.model('Movie', MovieSchema);
