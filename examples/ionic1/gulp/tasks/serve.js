/**
 * serve.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp browser-sync --save-dev
 * ``
 *
 */

'use strict';
var config = require('../config');

var gulp = require('gulp');
var helper = require('../helper');
var browserSync = require('browser-sync').create();



var port = config.defaultPort;


///////////////


gulp.task('serve:temp', function () {
    startBrowserSync(config.baseDirs);
});

gulp.task('serve:dist', function () {
    startBrowserSync(config.distFolder);
});

//////////////////////

function startBrowserSync(serverRoot) {

    helper.log('Starting BrowserSync on port ' + 8080 + ' for ' + serverRoot);

    var options = {
        //proxy: 'localhost:' + port,
        port: 8080,
        ws: true,
        server: {
            baseDir: serverRoot
        },
        reloadDelay: config.browserReloadDelay
    };

    browserSync.init(options);

}
