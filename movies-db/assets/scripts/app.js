/// <reference path="../../typings/index.d.ts" />

import 'jquery';
import loadingScreen from 'loading-screen';
import router from 'router';
import firebaseDb from 'firebase-database';
import htmlHandler from 'html-handler';

$(document).ready(function () {
    router.start();

    htmlHandler.setHtml('header', '#header');
    htmlHandler.setHtml('footer', '#footer');

    let user = firebaseDb.getCurrentUser();

    console.log(user);

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

    setTimeout(() => {
        loadingScreen.stop();
    }, 1000);
});