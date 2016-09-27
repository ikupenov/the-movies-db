/* globals Promise */

import firebaseDb from 'firebase-database';

class UserModel {
    signIn(email, password) {
        // TODO: Validate Input

        return firebaseDb.signInWithEmail(email, password)
            .catch(error => Promise.reject(error));
    }

    signUp(email, password) {
        // TODO: Validate Input

        return firebaseDb.createUserWithEmail(email, password)
            .catch(error => Promise.reject(error));
    }

    signOut() {
        return firebaseDb.signOut()
            .catch(error => Promise.reject(error));
    }

    addToWatchlist(movieId) {
        
    }
}

const userModel = new UserModel();
export default userModel;