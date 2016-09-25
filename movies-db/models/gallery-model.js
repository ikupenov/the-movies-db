/* globals Promise */

import moviesDb from 'movies-database';

class GalleryModel {
    getMovieInfoById(movieId) {
        return new Promise((resolve, reject) => {
            moviesDb.getMovieDetails(movieId)
                .then(movieDetails => resolve(movieDetails))
                .catch(error => reject(error));
        });
    }

    getMovieInfoByTitle(movieTitle) {
        return new Promise((resolve, reject) => {
            moviesDb.searchMoviesByTitle(movieTitle)
                .then(movies => moviesDb.getMovieDetails(movies.results[0].id))
                .then(movieDetails => resolve(movieDetails))
                .catch(error => reject(error));
        });
    }

    searchMoviesByTitle(movieTitle) {
        return new Promise((resolve, reject) => {
            moviesDb.searchMoviesByTitle(movieTitle)
                .then(movies => resolve(movies))
                .catch(error => reject(error));
        });
    }

    getImageUrl(imageSrc) {
        let imageUrl = imageSrc ? `http://image.tmdb.org/t/p/w500${imageSrc}` :
            'http://clipartix.com/wp-content/uploads/2016/08/Questions-powerpoint-question-mark-clip-art.jpg';

        return imageUrl;
    }
}

const galleryModel = new GalleryModel();
export default galleryModel;