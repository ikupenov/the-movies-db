/* globals Promise */

import loadingScreen from 'loading-screen';

import htmlHandler from 'html-handler';
import userModel from 'user-model';

class AccountController {
    load(sammy) {
        sammy.redirect('#/account/sign-in');
    }

    loadLoginPage() {
        htmlHandler.setHtml('sign-in');
    }

    loadSignupPage() {
        htmlHandler.setHtml('sign-up');
    }

    signIn(sammy) {
        // TODO: Validate input

        // let username = sammy.params.username;
        let email = sammy.params.email;
        let password = sammy.params.password;

        userModel
            .signIn(email, password)
            .then(() => {
                loadingScreen.start();
            }).then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        sammy.redirect('#/');
                        loadingScreen.stop();
                        resolve();
                    }, 1500);
                });
            });
    }

    signUp(sammy) {
        // TODO: Validate input

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
                        sammy.redirect('#/account/sign-in');
                        loadingScreen.stop();
                        resolve();
                    }, 750);
                });
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
            });
    }
}

const accountController = new AccountController;
export default accountController;