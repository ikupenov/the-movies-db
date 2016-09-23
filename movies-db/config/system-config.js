/* global SystemJS, System */

SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': './../lib/scripts/plugin-babel.js',
        'systemjs-babel-build': './../lib/scripts/systemjs-babel-browser.js',

        'main': './../assets/scripts/app.js',
        'jquery': './../lib/scripts/jquery.min.js',

        'db-module': './../models/movies-db-module.js',

        'firebase': './../lib/scripts/firebase.js',
        'firebase-module': './../config/firebase-config.js'
    },
});

System.import('main');