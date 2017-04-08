#!/bin/bash

echo "Build ipa/archive from current branch"

gulp project:make
ionic resources
ionic build ios --release --buildConfig
