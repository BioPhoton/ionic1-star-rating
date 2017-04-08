/**
 * font.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 */

'use strict';

var gulp = require('gulp'),

  helper = require('../helper'),
  $ = require('gulp-load-plugins')();
//runSequence = require('run-sequence');

var config = require('../config');

var defaultConfig = {
  fontCopies : []
};

////////////////


/**
 *  Overrides
 *
 * config.font {[see defaultConfig here]}
 *
 **/
var fontConfig = defaultConfig;

if('font' in config) {
  fontConfig = helper.arrayConcatExtend(defaultConfig, config.font);
}



//organize font files for project
gulp.task('font:clean', function(done) {
  return helper.clean(fontConfig.fontDest+'/**/*.*', done);
});
gulp.task('font:copy',  function(done) {
  helper.log('Copying font');


  if(fontConfig.fontCopies.length>0) {
    return helper.bulkCopy(fontConfig.fontCopies);
  }
  return done;
});
