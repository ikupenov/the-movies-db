/// <reference path="../typings/index.d.ts" />

import 'jquery';

// Test
import { moviesDb } from 'db-module';
import { firebaseModule } from 'firebase-module';
// ---

$(document).ready(function () {
    $('#header').load('./views/header-menu.html', () => false);

    // Test
    $('#content').load('./views/404-page.html', () => false);
    // ---

    let $body = $('body');

    setTimeout(() => {
        $body.removeClass('loading');
        $body.addClass('loaded');
    }, 1000);

    $(window).scroll(() => {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    $('#return-to-top').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});

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