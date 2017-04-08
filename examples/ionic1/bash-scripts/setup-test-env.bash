#!/bin/bash


echo "Stetting up test environment"

npm install karma karma-jasmine jasmine-core karma-chrome-launcher karma-cli --save-dev
sudo npm install -g protractor
sudo webdriver-manager update

sudo npm install -g nodemon



ionic info
