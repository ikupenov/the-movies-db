/* global SystemJS, System */

SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': './../lib/scripts/systemjs-babel-plugin/plugin-babel.js',
        'systemjs-babel-build': './../lib/scripts/systemjs-babel-plugin/systemjs-babel-browser.js',

        'main': './../assets/scripts/app.js',
        'router': './../config/sammy-config.js',
        'loading-screen': './../assets/scripts/loading-screen.js',
        'validator': './../models/helpers/vaidator.js',
        'error-logger': './../models/helpers/error-logger.js',

        'sammy': './../lib/scripts/sammy.js',
        'jquery': './../lib/scripts/jquery.min.js',
        'handlebars': './../lib/scripts/handlebars.js',

        'bootstrap': './../lib/scripts/bootstrap.min.js',
        'material': './../lib/scripts/material.min.js',
        'material-kit': './../lib/scripts/material-kit.js',

        'firebase': './../lib/scripts/firebase.js',
        'firebase-config': './../config/firebase-config.js',

        'movies-database': './../database/movies-database.js',
        'firebase-database': './../database/firebase-database.js',

        'html-handler': './../views/helpers/html-handler.js',
        'template-handler': './../views/helpers/template-handler.js',

        'account-controller': './../controllers/account-controller.js',
        'header-controller': './../controllers/header-controller.js',
        'gallery-controller': './../controllers/gallery-controller.js',

        'user-model': './../models/user-model.js',
        'search-model': './../models/search-model.js',
        'gallery-model': './../models/gallery-model.js'
    },
});

System.import('main');