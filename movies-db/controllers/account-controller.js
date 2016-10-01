/* globals Promise */

import userModel from 'user-model';

import loadingScreen from 'loading-screen';
import htmlHandler from 'html-handler';
import templateHandler from 'template-handler';

class AccountController {
    load(sammy) {
        sammy.redirect('#/account/sign-in');
    }

    loadLoginPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');

        htmlHandler.setHtml('sign-in');
    }

    loadSignupPage() {
        let $warningContainer = $('.warning');
        $warningContainer.addClass('hide');

        htmlHandler.setHtml('sign-up');
    }

    signIn(sammy) {
        let email = sammy.params.email;
        let password = sammy.params.password;

        userModel
            .signIn(email, password)
            .then(() => {
                loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        sammy.redirect('#/');
                        loadingScreen.stop();
                        resolve();
                    }, 1500);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                let $warningContainer = $('.warning');
                $warningContainer.removeClass('hide');

                let $dangerMessageContainer = $('#danger-message-container');
                $dangerMessageContainer.html(message);

                // TODO: Add to error handler
                console.log(`${code} - ${message}`);
            });
    }

    signUp(sammy) {
        let username = sammy.params.username;
        let email = sammy.params.email;
        let password = sammy.params.password;
        let passwordConfirm = sammy.params['password-confirm'];

        userModel
            .signUp(email, password)
            .then(() => {
                loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        sammy.redirect('#/home');
                        loadingScreen.stop();
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                let $warningContainer = $('.warning');
                $warningContainer.removeClass('hide');

                let $dangerMessageContainer = $('#danger-message-container');
                $dangerMessageContainer.html(message);

                // TODO: Add to error handler
                console.log(`${code} - ${message}`);
            });
    }

    signOut(sammy) {
        userModel
            .signOut()
            .then(() => {
                loadingScreen.start();
            }).then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        sammy.redirect('#/');
                        loadingScreen.stop();
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                // TODO: Add to error handler
                console.log(`${code} - ${message}`);
            });
    }

    addToWatchlist(sammy) {
        const movieId = sammy.params.id;
        userModel.addToWatchlist(movieId);
    }

    removeFromWatchlist(sammy) {
        const movieId = sammy.params.id;
        userModel.removeFromWatchlist(movieId);

        this.getWatchlist();
    }

    getWatchlist() {
        userModel.getWatchlist()
            .then(moviesDetails => {
                loadingScreen.start();
                return userModel.getWatchlistHandlebarsObject(moviesDetails)
            })
            .then(handlebarsObject => {
                window.scrollTo(0, 0);
                templateHandler.setTemplate('gallery', '#content', handlebarsObject);
                setTimeout(() => {
                    loadingScreen.stop();
                }, 500);
            }).catch(console.log);
    }
}

const accountController = new AccountController();
export default accountController;