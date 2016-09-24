import firebaseDb from 'firebase-database';
import templateHandler from 'template-handler';

class UserModel {
    signIn(email, password) {
        // TODO: Validate Input

        return firebaseDb.signInWithEmail(email, password)
            .then(data => {
                templateHandler.setTemplate('header', '#header', { loggedIn: true });
                // Popup message
                // Change navbar
            }).catch(console.log);
    }

    signUp(email, password) {
        // TODO: Validate Input

        return firebaseDb.createUserWithEmail(email, password)
            .then(data => {
                // Popup message
                // Redirect to sign in
            }).catch(console.log);
    }

    signOut() {
        return firebaseDb.signOut()
            .then(data => {
                templateHandler.setTemplate('header', '#header', { loggedIn: false });
            }).catch(console.log);
    }
}

const userModel = new UserModel();
export default userModel;