const MoviesController = require('./app/controllers/MoviesController.js');

const MoviesController = new MoviesController();


app.get('/movies', MoviesController.getMovies(req, res)); 

app.get('/movies/:id', MoviesController.getMovieById(req, res));


app.post('/movies', MoviesController.insertMovie(req, res));


app.delete('/movies/:id', MoviesController.deleteMovie(req, res));

app.patch('/movies/:id', MoviesController.updateMovie(req, res));
