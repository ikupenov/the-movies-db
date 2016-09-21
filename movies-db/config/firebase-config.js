/* globals firebase */

import { firebase } from 'firebase';

let firebaseModule = (function () {
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyC8-EiY-FwmVEqJnEBvdQ0hP39QnWu6Tqc",
        authDomain: "movie-db-backend.firebaseapp.com",
        databaseURL: "https://movie-db-backend.firebaseio.com",
        storageBucket: "movie-db-backend.appspot.com",
        messagingSenderId: "815705004894"
    };

    firebase.initializeApp(config);

    return {
        firebase
    };
} ());

export { firebaseModule };