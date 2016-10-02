/* globals Promise */

import firebaseModule from 'firebase-config';

const firebaseDb = (function () {
    const database = firebaseModule.database;
    const auth = firebaseModule.auth;

    function getChild(child) {
        return database.child(child);
    }

    function createUserWithEmail(email, password, username) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(() => this.getCurrentUser())
            .then(user => {
                user.updateProfile({ displayName: username })
                localStorage.setItem('username', username);
                localStorage.setItem('userUid', user.uid);
            })
            .catch(error => Promise.reject(error));
    }

    function signInWithEmail(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(error => Promise.reject(error));
    }

    function signOut() {
        return auth.signOut();
    }

    function getCurrentUser() {
        return new Promise(resolve => {
            auth.onAuthStateChanged(userInfo => resolve(userInfo));
        });
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
        return new Promise((resolve, reject) => {
            let watchlist = database.child('users').child(userId).child('watchlist');
            watchlist.once('value', data => {
                if (!data.val()) {
                    reject({ heading: 'Empty', message: 'The watchlist is empty.' });
                    return;
                }

                let dataKeys = Object.keys(data.val());
                let moviesIds = [];
                dataKeys.forEach(key => {
                    moviesIds.push(key);
                });

                resolve(moviesIds);
            });
        });
    }

    function pushError(error) {
        return new Promise(resolve => {
            resolve(database.child('errors').push(error));
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
        getUsersWatchlist,
        pushError
    };
} ());

export default firebaseDb;