#!/bin/bash

sleep 0.1
echo "Removing all previous distributions and react builds" &&
rm -rf ./dist/ ./build/ &&
sleep 0.1
echo "Build react application" &&
npm run build &&
sleep 0.1
echo "Build electron distributions" &&
npm run dist:mac
