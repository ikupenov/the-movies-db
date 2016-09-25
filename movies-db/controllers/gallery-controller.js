import galleryModel from 'gallery-model';
import templateHandler from 'template-handler';

class GalleryController {
    // loadDetailedMoviePage(sammy) {
    //     const id = sammy.params.id;

    //     galleryModel.getMovieInfoByTitle(id)
    //         .then(movieInfo => {
    //             let title = movieInfo.original_title;
    //             let id = movieInfo.id;
    //             let description = movieInfo.overview;
    //             let posterSrc = galleryModel.getImageUrl(movieInfo.poster_path);

    //             // TODO: Change handlerbars
    //             let movie = {
    //                 title: title,
    //                 id: id,
    //                 description: description,
    //                 posterSrc: posterSrc
    //             };

    //             let handlebarsObject = {
    //                 movies: [
    //                     movie, movie, movie, movie
    //                 ]
    //             };

    //             templateHandler.setTemplate('gallery', '#content', handlebarsObject);
    //             // ---

    //         }).catch(console.log);
    // }

    redirectToPopularMoviesPage(sammy) {
        sammy.redirect('#/movies/popular/1');
    }

    redirectToTopRatedMoviesPage(sammy) {
        sammy.redirect('#/movies/top-rated/1');
    }

    redirectToUpcomingMoviesPage(sammy) {
        sammy.redirect('#/movies/upcoming/1');
    }

    redirectToNowPlayingMoviesPage(sammy) {
        sammy.redirect('#/movies/now-playing/1');
    }

    loadFoundMoviesPage(sammy) {
        const searchTerm = sammy.params.search;

        galleryModel.searchMoviesByTitle(searchTerm)
            .then(movies => galleryModel.getHandlebarsObject(movies))
            .then(handlebarsObject => {
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadPopularMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getPopularMovies(pageCount)
            .then(movies => galleryModel.getHandlebarsObject(movies))
            .then(handlebarsObject => {
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadTopRatedMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getTopRatedMovies(pageCount)
            .then(movies => galleryModel.getHandlebarsObject(movies))
            .then(handlebarsObject => {
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadUpcomingMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getUpcomingMovies(pageCount)
            .then(movies => galleryModel.getHandlebarsObject(movies))
            .then(handlebarsObject => {
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadNowPlayingMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getNowPlayingMovies(pageCount)
            .then(movies => galleryModel.getHandlebarsObject(movies))
            .then(handlebarsObject => {
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }
}

const galleryController = new GalleryController();
export default galleryController;