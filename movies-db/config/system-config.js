/* global SystemJS, System */

SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': './../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        'main': './../scripts/main.js',
        'jquery': './../lib/jquery.min.js',

        'db-module': './../models/movies-db-module.js',

        'firebase': './../lib/firebase.js',
        'firebase-module': './../config/firebase-config.js'
    },
});

System.import('main');