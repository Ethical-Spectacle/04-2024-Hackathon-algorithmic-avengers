#!/bin/bash

# Change to frontend directory
#cd frontend

# Create files within the existing frontend directory
cd src
mkdir components pages services
touch App.js index.js
cd ..
cd public
touch index.html

