/* globals Promise */

// Initializes the firebase database
import firebaseModule from 'firebase-config';

const firebaseDb = (function () {
    const database = firebaseModule.database;
    const auth = firebaseModule.auth;

    function createUserWithEmail(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
            .catch(error => {
                return Promise.reject(error);
            });
    }

    function signInWithEmail(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                return Promise.reject(error);
            });
    }

    function signOut() {
        return auth.signOut();
    }

    function getCurrentUser() {
        return auth.currentUser;
    }

    function onAuthStateChanged(callback) {
        return auth.onAuthStateChanged(function (user) {
            callback(user);
        });
    }

    return {
        createUserWithEmail,
        signInWithEmail,
        signOut,
        onAuthStateChanged,
        getCurrentUser
    };
} ());

export default firebaseDb;