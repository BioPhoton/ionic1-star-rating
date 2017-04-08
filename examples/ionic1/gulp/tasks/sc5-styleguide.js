/**
 * styleguide.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins gulp-autoprefixer gulp-sass sc5-styleguide gulp-postcss --save-dev
 * ``
 *
 */

//@TODO use gulp-load-plugins

'use strict';

var gulp = require('gulp');
var helper = require('../helper');
var styleguide = require('sc5-styleguide');
var $ = require('gulp-load-plugins')();
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');


var config = require('../config');


var defaultConfig = {
        srcFolder : [],
        generateScr:[config.src+'**/*.scss'],
        applyStylesSrc:[config.src+'**/*.scss'],
        destFolder: config.root+config.sc5StyleguideFolder,
        sassOptions : {
            indentWidth: 4,
            outputStyle: 'expanded',
            errorLogToConsole: true
        },
        autoprefixerOptions: {
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        },
        styleguideOptions : {
            title: 'JobRocker App Styleguide',
            server: true,
            rootPath: config.root+config.sc5StyleguideFolder,
            overviewPath: config.src+'scss/'+config.sc5StyleguideFolder+'README.md',
            port: 3500

        }
    };

////////////////


/**
 *  Overrides
 *
 * config.sc5Styleguide {[see defaultConfig here]}
 *
 **/
var styleguideConfig = defaultConfig;

if ('sc5Styleguide' in config) {
    styleguideConfig = helper.arrayConcatExtend(defaultConfig, config.sc5Styleguide);
}

//__________________________________________________________________________________________________


////////////////////////


gulp.task('styleguide:init', function () {
    helper.log('This task should autocreate the folder "sc5-styleguide" with styleguide.scss file and the "components" folder including a dummy-component.scss file');
});

gulp.task('styleguide:generate', function () {
    helper.log('Generate components from ' + styleguideConfig.generateScr);
    return gulp.src(styleguideConfig.generateScr)
        .pipe(styleguide.generate(styleguideConfig.styleguideOptions))
        .pipe(gulp.dest(styleguideConfig.destFolder));
});

gulp.task('styleguide:applystyles', function () {
    helper.log('Apply styles from ' + styleguideConfig.applyStylesSrc);
    return gulp.src(styleguideConfig.applyStylesSrc)
        .pipe($.concat('app.css'))
        .pipe($.sass(styleguideConfig.sassOptions).on('error', $.sass.logError))
        .pipe(autoprefixer(styleguideConfig.autoprefixerOptions))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(styleguideConfig.destFolder));
});

gulp.task('styleguide:build', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('styleguide:watch', ['styleguide:build'], function () {
    helper.log('View the styleguide in your browser under http://localhost:3500/');
    // Start watching changes and update styleguide whenever changes are detected
    // Styleguide automatically detects existing server instance
    gulp.watch(['src/**/*.scss'], ['styleguide:build']);
});
