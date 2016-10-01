/// <reference path="../typings/index.d.ts" />

/* globals Promise */

import 'jquery';

const moviesDb = (function () {
    const API_KEY = '?api_key=f9709353dd332045c8dc95553fc63dd8';
    const API_URL = 'https://api.themoviedb.org/3';
    const LANGUAGE_US = '&language=en-US';

    function searchMoviesByTitle(movieTitle) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/search/movie${API_KEY}${LANGUAGE_US}&query=${movieTitle}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getMovieDetails(movieId) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/${movieId}${API_KEY}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getMovieImages(movieId) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/${movieId}/images${API_KEY}${LANGUAGE_US}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getMovieTrailers(movieId) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/${movieId}/videos${API_KEY}${LANGUAGE_US}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getPopularMovies(pageCount) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/popular${API_KEY}&page=${pageCount}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getTopRatedMovies(pageCount) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/top_rated${API_KEY}&page=${pageCount}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getUpcomingMovies(pageCount) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/upcoming${API_KEY}&page=${pageCount}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getNowPlayingMovies(pageCount) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/now_playing${API_KEY}&page=${pageCount}`)
                .done(resolve)
                .fail(reject);
        });
    }

    function getMoviesDetails(moviesIds) {
        return new Promise(resolve => {
            let moviesDetails = [];

            let asyncWait = moviesIds.map(movieId => {
                return new Promise(resolve => {
                    $.getJSON(`${API_URL}/movie/${movieId}${API_KEY}`, movieDetails => {
                        moviesDetails.push(movieDetails);
                        resolve();
                    });
                });
            });

            Promise.all(asyncWait).then(() => resolve(moviesDetails));
        });
    }

    return {
        searchMoviesByTitle,
        getMovieDetails,
        getMovieImages,
        getMovieTrailers,
        getPopularMovies,
        getTopRatedMovies,
        getUpcomingMovies,
        getNowPlayingMovies,
        getMoviesDetails
    };
} ());

export default moviesDb;