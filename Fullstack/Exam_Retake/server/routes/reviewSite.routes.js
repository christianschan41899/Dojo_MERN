const UserController = require('../controller/user.controller');
const MovieController = require('../controller/movie.controller');

module.exports = app =>{
    app.get('/api/user/:username', UserController.getUser);
    app.post('/api/user/new', UserController.createUser);

    app.post('/api/movies/new', MovieController.createMovieWithReview);
    app.put('/api/movies/:id', MovieController.updateMovie);
    app.get('/api/movies/:id', MovieController.getMovie);
    app.get('/api/movies', MovieController.getAllMovies);
    app.delete('/api/movies/:id', MovieController.deleteMovie);
    app.post('/api/review/new', MovieController.createReview);
}