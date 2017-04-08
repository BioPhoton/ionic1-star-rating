#!/bin/bash

directories="node_modules typings www plugins platforms resources"
for directory in $directories; do
    echo Removing $directory && rm -rf $directory
done

npm i

tsd install
bower update
gulp project:init
ionic io init
ionic resources
ionic state restore
