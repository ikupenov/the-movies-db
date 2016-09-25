import { firebase } from 'firebase';

const firebaseModule = (function () {
    const config = {
        apiKey: "AIzaSyBbTzQlQZOfzJv-ksXnBCEkuXgWNWQhO9o",
        authDomain: "themovies-db.firebaseapp.com",
        databaseURL: "https://themovies-db.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "786197584680"
    };

    firebase.initializeApp(config);

    const database = firebase.database().ref();
    const auth = firebase.auth();

    return {
        database, auth
    };
} ());

export default firebaseModule;