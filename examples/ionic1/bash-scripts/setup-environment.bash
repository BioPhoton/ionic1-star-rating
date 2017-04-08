#!/bin/bash

echo "Setup environment for ionic typescript project..."

nodePath=$(which node);

if [ -n "$nodePath" ]; then
   echo "node is installed under: $nodePath"
else
   "echo node is not installed"
   exit
fi

echo ""

npmPath=$(which npm);

if [ -n "$npmPath" ]; then
   echo "npm is installed under: $npmPath"
else
   echo "npm is not installed"
   exit
fi

echo ""

echo "Checking npm modules..."
echo ""

programs="ionic cordova bower typings"

for program in $programs; do
    echo "Checking $program..."

    programPath=$(which $program);

    if [ -n "$programPath" ]; then
       echo "$program is installed under: $programPath"
    else
       echo "Installing $program globally"
       sudo npm install -g $program
    fi
    echo ""
done

echo "Printing versions..."

ionic info
