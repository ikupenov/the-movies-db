/// <reference path="../../typings/index.d.ts" />

import 'jquery';
import engine from 'engine';
import htmlHandler from './../../views/helpers/html-handler.js';

$(document).ready(function () {
    engine.start();

    // TODO: Check if logged in
    htmlHandler.setHtml('header', '#header');
    htmlHandler.setHtml('footer', '#footer');

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