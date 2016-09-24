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
            .then(_ => {
                sammy.redirect('#/')
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
            .then(_ => {
                sammy.redirect('#/account/sign-in');
            });
    }

    signOut(sammy) {
        userModel
            .signOut()
            .then(_ => {
                sammy.redirect('#/');
            });
    }
}

const accountController = new AccountController;
export default accountController;