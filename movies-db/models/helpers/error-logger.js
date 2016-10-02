import firebaseDb from 'firebase-database';

const errorLogger = (function () {
    function pushError(error) {
        firebaseDb.pushError(error);
    }

    return {
        pushError
    }
} ());

export default errorLogger;