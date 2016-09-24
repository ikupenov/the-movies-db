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

    function getMovieVideos(movieId) {
        return new Promise((resolve, reject) => {
            $.getJSON(`${API_URL}/movie/${movieId}/videos${API_KEY}${LANGUAGE_US}`)
                .done(resolve)
                .fail(reject);
        });
    }

    return {
        searchMoviesByTitle, 
        getMovieDetails, 
        getMovieImages, 
        getMovieVideos
    };
} ());

export default moviesDb;


// Example
//-------------------------

// moviesDb.searchMoviesByTitle('up')
//     .then(movies => moviesDb.getMovieDetails(movies.results[0].id))
//     .then(movieInfo => moviesDb.getMovieVideos(movieInfo.id))
//     .then(movieVideo => {
//         const VIDEO_KEY = movieVideo.results[0].key;

//         let div = $('<div id="frame-wrapper"/>');
//         div.css('text-align', 'center');

//         let iFrame = $(`<iframe width="1300" height="720" src="https://www.youtube.com/embed/${VIDEO_KEY}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>`);

//         div.append(iFrame);

//         $('body').prepend(div);
//     });