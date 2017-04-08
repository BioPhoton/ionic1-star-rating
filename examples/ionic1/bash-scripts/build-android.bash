#!/bin/bash

echo "Build apk from current branch"

gulp project:make
ionic resources
ionic build android --release --buildConfig
gulp releases:copy:android
