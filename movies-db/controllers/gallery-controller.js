import galleryModel from 'gallery-model';
import templateHandler from 'template-handler';

class GalleryController {
    loadDetailedMoviePage(sammy) {
        const id = sammy.params.id;

        galleryModel.getMovieInfoByTitle(id)
            .then(movieInfo => {
                let title = movieInfo.original_title;
                let id = movieInfo.id;
                let description = movieInfo.overview;
                let posterSrc = galleryModel.getImageUrl(movieInfo.poster_path);

                // TODO: Change handlerbars
                let movie = {
                    title: title,
                    id: id,
                    description: description,
                    posterSrc: posterSrc
                };

                let handlebarsObject = {
                    movies: [
                        movie, movie, movie, movie
                    ]
                };

                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
                // ---

            }).catch(console.log);
    }

    loadFoundMoviesPage(sammy) {
        const searchTerm = sammy.params.search;

        galleryModel.searchMoviesByTitle(searchTerm)
            .then(movies => {
                let handlebarsObject = {
                    movies: []
                };

                movies.results.forEach(movie => {
                    let title = movie.original_title;
                    let id = movie.id;
                    let description = movie.overview;
                    let posterSrc = galleryModel.getImageUrl(movie.poster_path);

                    handlebarsObject.movies.push({ title, id, description, posterSrc });
                });

                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            });
    }
}

const galleryController = new GalleryController();
export default galleryController;