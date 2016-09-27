import loadingScreen from 'loading-screen';

import galleryModel from 'gallery-model';
import templateHandler from 'template-handler';

class GalleryController {
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

    loadMovieDetailsPage(sammy) {
        const id = sammy.params.id;

        galleryModel.getMovieInfoById(id)
            .then(movieDetails => {
                loadingScreen.start();

                let title = movieDetails.original_title;
                let description = movieDetails.overview;
                let rating = movieDetails.vote_average;
                let year = movieDetails.release_date.split('-')[0];

                return { title, description, rating, year };
            }).then(handlebarsObject => {
                galleryModel.getMovieTrailer(id)
                    .then(trailer => {
                        let key = trailer ? trailer.key : 'X0k7N0ASfp8';
                        handlebarsObject.key = key;
                        return handlebarsObject;
                    }).then(handlebarsObject => {
                        templateHandler.setTemplate('movie-details', '#content', handlebarsObject);
                        
                        window.scrollTo(0, 0);
                        setTimeout(() => {
                            loadingScreen.stop();
                        }, 500);
                    });
            });
    }

    loadFoundMoviesPage(sammy) {
        const searchTerm = sammy.params.search;

        galleryModel.searchMoviesByTitle(searchTerm)
            .then(movies => galleryModel.getGalleryHandlebarsObject(movies))
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadPopularMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getPopularMovies(pageCount)
            .then(movies => galleryModel.getGalleryHandlebarsObject(movies))
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadTopRatedMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getTopRatedMovies(pageCount)
            .then(movies => galleryModel.getGalleryHandlebarsObject(movies))
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadUpcomingMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getUpcomingMovies(pageCount)
            .then(movies => galleryModel.getGalleryHandlebarsObject(movies))
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }

    loadNowPlayingMoviesPage(sammy) {
        const pageCount = sammy.params.page;

        galleryModel.getNowPlayingMovies(pageCount)
            .then(movies => galleryModel.getGalleryHandlebarsObject(movies))
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
            }).catch(console.log);
    }
}

const galleryController = new GalleryController();
export default galleryController;