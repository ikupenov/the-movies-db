import { firebase } from 'firebase';

const firebaseModule = (function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDOf5Nu3yzkfUBTpqwLsXhxOZiEdpyv6Mw",
        authDomain: "movies-db-6fc0d.firebaseapp.com",
        databaseURL: "https://movies-db-6fc0d.firebaseio.com",
        storageBucket: "movies-db-6fc0d.appspot.com",
        messagingSenderId: "863798788488"
    };

    firebase.initializeApp(config);

    const database = firebase.database().ref();

    const auth = firebase.auth();
    // Returns promises
    const signInWithEmailAndPassword = auth.signInWithEmailAndPassword;
    const createUserWithEmailAndPassword = auth.createUserWithEmailAndPassword;
    const onAuthStateChange = auth.onAuthStateChange;

    return {
        database, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChange
    };
} ());

export { firebaseModule };