/* globals Promise */

import firebaseModule from 'firebase-config';

const firebaseDb = (function () {
    const database = firebaseModule.database;
    const auth = firebaseModule.auth;

    function getChild(child) {
        return database.child(child);
    }

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
        let user = {};
        auth.onAuthStateChanged(userInfo => user.userInfo = userInfo);

        return user;
    }

    function onAuthStateChanged(callback) {
        return auth.onAuthStateChanged(function (user) {
            callback(user);
        });
    }

    function addToWatchlist(userId, movieId) {
        return new Promise(resolve => {
            let movieToAdd = database.child('users').child(userId).child('watchlist').child(movieId);
            movieToAdd.update({ 'movieId': movieId });

            resolve(movieToAdd);
        });
    }

    function removeFromWatchlist(userId, movieId) {
        return new Promise(resolve => {
            let movieToRemove = database.child('users').child(userId).child('watchlist').child(movieId);
            movieToRemove.update({ 'movieId': [] });

            resolve(movieToRemove);
        });
    }

    function getUsersWatchlist(userId) {
        return new Promise(resolve => {
            let watchlist = database.child('users').child(userId).child('watchlist');
            watchlist.once('value', data => {
                let dataKeys = Object.keys(data.val());
                let moviesIds = [];
                dataKeys.forEach(key => {
                    moviesIds.push(key);
                });

                resolve(moviesIds);
            });
        });
    }

    return {
        createUserWithEmail,
        signInWithEmail,
        signOut,
        onAuthStateChanged,
        getCurrentUser,
        getChild,
        addToWatchlist,
        removeFromWatchlist,
        getUsersWatchlist
    };
} ());

export default firebaseDb;