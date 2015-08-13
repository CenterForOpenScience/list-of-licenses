#!/usr/bin/env bash

echo "The list-of-licenses module includes a collection of iconography.\n To use these files please provide the full path of your server's \n static image directory, otherwise just press [ENTER]:"

read -e staticPath

if [ -z $staticPath ]; then 
    echo "Running: gulp build"
    $(which gulp) build
else
    echo "Running: cp img/* $staticPath"
    eval "cp img/* $staticPath"    
    echo "Please provide the url prefix (i.e. /static/img) to use for the given path: "
    read -e prefix
    if [-z $prefix]; then
        exit 0 
    fi
    echo "Running: gulp build --staticPath $prefix"
    $(which gulp) build --staticPath "$prefix"
fi
