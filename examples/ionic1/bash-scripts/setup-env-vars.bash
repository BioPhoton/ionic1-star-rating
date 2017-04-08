#!/bin/bash

confPath="./config";
localConfigName="local.config.json";

echo "This script wil create either a local.config.json or a [custom].config.json with symlink to local.config.json";
echo "Do you want to create a custom config file? (Y/N)";

read withSymlink

if [ "$withSymlink" == "Y" ]; then
    echo "Enter your personal environment name:";

    read envName

    echo "New custom config for $envName will be created in ./config folder";

    cp $confPath/base.config.json $confPath/$envName.config.json

    echo "New $envName config will be symlinked to $localConfigName";

    ln -s $confPath/$envName.config.json $confPath/$localConfigName;
else
  echo "New config will be created in ./config folder";
  cp $confPath/base.config.json $confPath/$localConfigName
fi
