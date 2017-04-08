/**
 * ionic_resources.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 */

'use strict';

var gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),

  helper = require('../helper'),
  $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
  androidSource : "./platforms/android/build/outputs/apk/android-release.apk",
  releaseFolder : "./releases"
};

////////////////


/**
 *  Overrides
 *
 * config.ionic_resources {[see defaultConfig here]}
 *
 **/
var appReleasesConfig = defaultConfig;

if('appReleases' in config) {
  appReleasesConfig = helper.arrayConcatExtend(defaultConfig, config.ionicResources);
}




gulp.task('releases:clean:android', function(done) {
  return helper.clean(appReleasesConfig.releaseFolder+'/android/**/*.*', done);
});

gulp.task('releases:clean:ios', function(done) {
  return helper.clean(appReleasesConfig.releaseFolder+'/ios/**/*.*', done);
});

gulp.task('releases:copy:android',  function(done) {
  var configJsonString = require('../../src/app/build.config.json');
  var currentVersionFileName = configJsonString.version+'.apk';
  var target = appReleasesConfig.releaseFolder+'/android';
  helper.log('Copying apk to releases from ' + appReleasesConfig.androidSource + ' to ' + target);
  gulp.src(appReleasesConfig.androidSource)
    .pipe($.rename(currentVersionFileName))
    .pipe(gulp.dest(path.join(target)));

});
