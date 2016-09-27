/* globals Promise */

import loadingScreen from 'loading-screen';

import htmlHandler from 'html-handler';
import userModel from 'user-model';

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
                return new Promise((resolve, _) => {
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
                return new Promise((resolve, _) => {
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

                console.log(`${code} - ${message}`);
            });
    }

    signOut(sammy) {
        userModel
            .signOut()
            .then(() => {
                loadingScreen.start();
            }).then(() => {
                return new Promise((resolve, _) => {
                    setTimeout(() => {
                        sammy.redirect('#/');
                        loadingScreen.stop();
                        resolve();
                    }, 750);
                });
            }).catch(error => {
                const code = error.code;
                const message = error.message;

                console.log(message);
            });
    }
}

const accountController = new AccountController();
export default accountController;