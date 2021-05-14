const Movie = require('../models/movie.model');

module.exports.createMovieWithReview = (req, res) => {
    const { title, review } = req.body;
    Movie.Movie.create({ // Doesn't work. I don't know what's going on. This is literally the same syntax on all of my assignments yet this one refuses to work.
        title,
        review
    })
        .then(res => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", errors: err.errors }));
}

module.exports.getAllMovies = (req, res) => {
    Movie.Movie.find()
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

module.exports.getMovie = (req, res) => {
    Movie.Movie.findOne({_id: req.params.id})
        .then(movie => res.json(movie))
        .catch(err => res.json(err));
}

module.exports.updateMovie = (req, res) => {
    Movie.Movie.findOneAndUpdate({_id: req.params.id},  {$push: {reviews: req.body}} )
        .then(updatedMovie => res.json(updatedMovie))
        .catch(err => res.json(err));
}

module.exports.deleteMovie = (req, res) =>{
    Movie.Movie.deleteOne({_id: req.params.id})
    .then(confirmDelete => res.json(confirmDelete))
    .catch(err => res.json(err))
}

module.exports.createReview = (req, res) => {
    const { creator, rating, reviewText } = req.body;
    Movie.Review.create({
        creator,
        rating,
        reviewText
    })
        .then(res => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", errors: err.errors }));
}