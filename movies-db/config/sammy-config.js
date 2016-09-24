import Sammy from 'sammy';
import accountController from 'account-controller';

import htmlHandler from 'html-handler';

const engine = (function () {
    function start() {
        const sammy = Sammy(function () {
            this.get('#/', function () {
                this.redirect('#/home')
            });

            this.get('#/home', () => {
                htmlHandler.setHtml('home', '#content');
            });

            // Account 
            this.get('#/account', accountController.load);
            this.get('#/account/sign-up', accountController.loadSignupPage);
            this.get('#/account/sign-in', accountController.loadLoginPage);

            this.post('#/account/sign-in', accountController.signIn);
            this.post('#/account/sign-up', accountController.signUp);

            this.get('#/account/sign-out', accountController.signOut);
        });
        $(function () {
            sammy.run('#/');
        });
    }

    return {
        start
    }
} ());

export default engine;