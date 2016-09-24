// Initializes the firebase database
import firebaseModule from 'firebase-config';

const firebaseDb = (function () {
    const database = firebaseModule.database;
    const auth = firebaseModule.auth;

    function createUserWithEmail(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
            .catch(console.log);
    }

    function signInWithEmail(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(console.log);
    }

    function signOut() {
        return auth.signOut();
    }

    return {
        createUserWithEmail,
        signInWithEmail,
        signOut
    }
} ());

export default firebaseDb;