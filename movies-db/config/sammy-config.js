import Sammy from 'sammy';
import htmlHandler from 'html-handler';

import accountController from 'account-controller';
import headerController from 'header-controller';
import galleryController from 'gallery-controller';

const router = (function () {
    function start() {
        const sammy = Sammy(function () {
            this.before({}, () => headerController.updateHeader());

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', () => htmlHandler.setHtml('home', '#content'));

            // Account 
            this.get('#/account', accountController.load);
            this.get('#/account/sign-up', accountController.loadSignupPage);
            this.get('#/account/sign-in', accountController.loadLoginPage);

            this.post('#/account/sign-in', accountController.signIn);
            this.post('#/account/sign-up', accountController.signUp);
            this.get('#/account/sign-out', accountController.signOut);

            this.get('#/account/profile', accountController.getWatchlist);

            this.post('#/account/remove-from-watchlist/:id', accountController.removeFromWatchlist);
            this.post('#/account/add-to-watchlist/:id', accountController.addToWatchlist);

            // Gallery navigator
            this.get('#/movies/detailed/:id', galleryController.loadMovieDetailsPage);
            this.get('#/movies/search/title', galleryController.loadFoundMoviesPage);

            this.get('#/movies/popular', galleryController.redirectToPopularMoviesPage);
            this.get('#/movies/popular/:page', galleryController.loadPopularMoviesPage);

            this.get('#/movies/top-rated', galleryController.redirectToTopRatedMoviesPage);
            this.get('#/movies/top-rated/:page', galleryController.loadTopRatedMoviesPage);

            this.get('#/movies/upcoming', galleryController.redirectToUpcomingMoviesPage);
            this.get('#/movies/upcoming/:page', galleryController.loadUpcomingMoviesPage);

            this.get('#/movies/now-playing', galleryController.redirectToNowPlayingMoviesPage);
            this.get('#/movies/now-playing/:page', galleryController.loadNowPlayingMoviesPage);

            // Other
            this.get('#/about', () => htmlHandler.setHtml('about', '#content'));
 +          this.get('#/contact', () => htmlHandler.setHtml('contact', '#content'));

            // Not found
            this.notFound = (function() {
                htmlHandler.setHtml('404-page');
            });
        });
        $(function () {
            sammy.run('#/');
        });
    }

    return {
        start
    };
} ());

export default router;