/* globals Promise */

import moviesDb from 'movies-database';

class GalleryModel {
    searchMoviesByTitle(movieTitle) {
        return new Promise((resolve, reject) => {
            moviesDb.searchMoviesByTitle(movieTitle)
                .then(data => resolve(data.results))
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

    getMovieInfoById(movieId) {
        return new Promise((resolve, reject) => {
            moviesDb.getMovieDetails(movieId)
                .then(movieDetails => resolve(movieDetails))
                .catch(error => reject(error));
        });
    }

    getPopularMovies(pageCount) {
        return new Promise((resolve, reject) => {
            moviesDb.getPopularMovies(pageCount)
                .then(data => resolve(data.results))
                .catch(error => reject(error));
        });
    }

    getTopRatedMovies(pageCount) {
        return new Promise((resolve, reject) => {
            moviesDb.getTopRatedMovies(pageCount)
                .then(data => resolve(data.results))
                .catch(error => reject(error));
        });
    }

    getUpcomingMovies(pageCount) {
        return new Promise((resolve, reject) => {
            moviesDb.getUpcomingMovies(pageCount)
                .then(data => resolve(data.results))
                .catch(error => reject(error));
        });
    }

    getNowPlayingMovies(pageCount) {
        return new Promise((resolve, reject) => {
            moviesDb.getNowPlayingMovies(pageCount)
                .then(data => resolve(data.results))
                .catch(error => reject(error));
        });
    }

    getMovieTrailer(id) {
        return new Promise((resolve, reject) => {
            moviesDb.getMovieTrailers(id)
                .then(data => resolve(data.results[0]))
                .catch(error => reject(error));
        });
    }

    getGalleryHandlebarsObject(movies) {
        return new Promise((resolve, reject) => {
            let handlebarsObject = { movies: [] };

            movies.forEach(movie => {
                let title = movie.original_title;
                let id = movie.id;
                let description = movie.overview;
                let posterSrc = this._getImageUrl(movie.poster_path);

                handlebarsObject.movies.push({ title, id, description, posterSrc });
            });

            if (!handlebarsObject.movies.length) {
                reject("No results found.");
            }

            resolve(handlebarsObject);
        });
    }

    _getImageUrl(imageSrc) {
        let imageUrl = imageSrc ? `https://image.tmdb.org/t/p/w500${imageSrc}` :
            'http://clipartix.com/wp-content/uploads/2016/08/Questions-powerpoint-question-mark-clip-art.jpg';

        return imageUrl;
    }
}

const galleryModel = new GalleryModel();
export default galleryModel;