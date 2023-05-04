

class MoviesController {

    getMovies() {
        res.json(movies);
    }

    getMovieById() {

        const id = req.params.id;

        let movie = movies.find((movie) => { return movie.id == id });

        res.json(movie);

    }

    insertMovie() {
        const { title, synopsis } = req.body;

        let id = movies.length + 1;

        movies.push({
            id: id,
            title: title,
            synopsis: synopsis
        });

        res.json({ message: "Film ajouté avec succès", error: false });
    }

    updateMovie() {
        let id = req.params.id;

        const { title, synopsis } = req.body;

        let index = movies.findIndex((movie) => movie.id === parseInt(id));

        movies[index].title = title;
        movies[index].synopsis = synopsis;

        res.json({ message: "Film modifié avec succès", error: false });
    }

    deleteMovie() {

        let id = req.params.id;

        let index = movies.findIndex((movie) => { return movie.id == id });

        movies.splice(index, 1);

        res.json({ message: "Film supprimé avec succès", error: false });
    }

}

module.exports = MoviesController;