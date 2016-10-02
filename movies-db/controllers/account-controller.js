/* globals Promise */

import userModel from 'user-model';

import htmlHandler from 'html-handler';
import templateHandler from 'template-handler';
import loadingScreen from 'loading-screen';
import errorLogger from 'error-logger';

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

                errorLogger.push(`${code} - ${message}`);
            });
    }

    signUp(sammy) {
        let username = sammy.params.username;
        let email = sammy.params.email;
        let password = sammy.params.password;
        let passwordConfirm = sammy.params['password-confirm'];

        userModel
            .signUp(email, password, username, passwordConfirm)
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

                errorLogger.push(`${code} - ${message}`);
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

                errorLogger.push(`${code} - ${message}`);
            });
    }

    addToWatchlist(sammy) {
        const movieId = sammy.params.id;
        userModel.addToWatchlist(movieId);
    }

    removeFromWatchlist(sammy) {
        const movieId = sammy.params.id;
        userModel.removeFromWatchlist(movieId);
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
                setTimeout(() => loadingScreen.stop(), 500);
            }).catch(error => {
                let handlebarsObject = { heading: error.message }
                templateHandler.setTemplate('404', '#content', handlebarsObject);
            });
    }
}

const accountController = new AccountController();
export default accountController;