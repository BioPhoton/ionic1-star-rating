#!/usr/bin/env node

// Add Push Notification Icons
// v0.1
// Automatically adds the platform Pushicons to the res folder
// after the `prepare` command. By copying the images directly into the platforms folder.


var fs = require('fs');
var path = require('path');

var inputFolder = path.join(__dirname, '../../', 'resources/android/push_notification_icon/');
var outputFolder = path.join(__dirname, '../../', '/platforms/android/res/');
var iconName = 'icon_push_notification';
var iconFileExtension = '.png';

console.log('------------------------------------------------------------------------------------------');
console.log("Running hook: " + path.basename(process.env.CORDOVA_HOOK));
console.log('------------------------------------------------------------------------------------------');

fs.readdir(inputFolder, function (err, list) {
  list.forEach(function (dir) {

    if (dir.indexOf('drawable') === 0) {
      var drawableFolder = dir;

      fs.readdir(path.join(inputFolder,drawableFolder), function (err, list) {
        list.forEach(function (file) {

          fs.createReadStream(path.join(inputFolder,drawableFolder , file))
            .pipe(fs.createWriteStream(path.join(outputFolder, drawableFolder, iconName+iconFileExtension)));

          console.log('# ' + path.join(drawableFolder,file) + ' --> ' + path.join(drawableFolder, iconName));
        })

      })

    }
  });
  console.log('-----------------------------------------------------------------------------------------');
});
